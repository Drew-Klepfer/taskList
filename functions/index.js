const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTasks,
    postOneTask,
    deleteTask
} = require('./apis/tasks')

app.get('/tasks', getAllTasks);
app.post('/task', postOneTask);
app.delete('/task/:taskId', deleteTask);




exports.api = functions.https.onRequest(app);