import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import useAuth from "../../hook/useAuth";
import useIsMountedRef from "../../hook/useIsMountedRef";
import Error from "../../components/Error";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const isMountedRef = useIsMountedRef();

  const [error, setError] = useState(null);

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasksServer = async () => {
    const token = await user.getIdToken();
    console.log(token);
    const res = await fetch(
      "https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    return data.result;
  };

  // fetch tasks front
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromServer = await fetchTasksServer();
        if (isMountedRef.current) setTasks(tasksFromServer);
      } catch (err) {
        setError(err.message);
      }
    };

    getTasks();
  }, []);

  // Add Task server
  const addTaskServer = async (task) => {
    const token = await user.getIdToken();
    const res = await fetch(
      "https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ task: task }),
      }
    );
    const data = await res.json();
    console.log(data.result);
    return data.result;
  };

  // Add Task
  const addTask = async (task) => {
    try {
      const data = await addTaskServer(task);
      setTasks([...tasks, data]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete Task server
  const deleteTaskServer = async (id) => {
    const token = await user.getIdToken();
    const res = await fetch(
      `https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.status;
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      const status = await deleteTaskServer(id);

      if (status === 200) setTasks(tasks.filter((task) => task.id !== id));
      else throw new Error("Error Deleting This Task");
    } catch (err) {
      setError(err.message);
    }
  };

  // update reminder server
  const updateReminderServer = async (id, reminder) => {
    const token = await user.getIdToken();
    const res = await fetch(
      `https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reminder: !reminder }),
      }
    );

    const data = await res.json();
    return data.result;
  };

  // update reminder
  const updateReminder = async (id, reminder) => {
    try {
      const data = await updateReminderServer(id, reminder);

      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (user === null || user === undefined)
    return <Navigate to={{ pathname: "/" }} />;

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        logout={logout}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={updateReminder} />
      ) : (
        "No Tasks To Show"
      )}

      {error && <Error error={error} />}

      <Footer />
    </div>
  );
};

export default Dashboard;
