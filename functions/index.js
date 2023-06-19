const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTasks,
    postOneTask,
    deleteTask,
    editTask
} = require('./apis/tasks')

app.get('/tasks', getAllTasks);
app.post('/task', postOneTask);
app.delete('/task/:taskId', deleteTask);
app.put('/task/:taskId', editTask);




exports.api = functions.https.onRequest(app);