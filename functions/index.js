const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTasks,
    postOneTask
} = require('./apis/tasks')

app.get('/tasks', getAllTasks);
app.post('/task', postOneTask);




exports.api = functions.https.onRequest(app);