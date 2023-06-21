// firebase and framework
const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
const { errorHandle, authenticate } = require("./utils/middleware");

const {
    getTasks,
    addTask,
    getTask,
    updateTask,
    deleteTask,
} = require("./handlers/tasks");

const {
    setUser
} = require("./handlers/users")

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    })
);

app.use(authenticate);

// users
app.get("/users", setUser);

// tasks
app.get("/tasks", getTasks);
app.post("/tasks", addTask);
app.get("/tasks/:id", getTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);


app.use(errorHandle);

exports.api = functions.https.onRequest(app);
