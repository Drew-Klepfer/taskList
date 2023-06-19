const { db } = require('../util/admin');

/* fetch todos from db and forward to client */
exports.getAllTasks = (request, response) => {
	db
		.collection('tasks')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let tasks = [];
			data.forEach((doc) => {
				tasks.push({
                    todoId: doc.id,
                    title: doc.data().title,
					description: doc.data().description,
					status: doc.data().status,
					createdAt: doc.data().createdAt,
					dueDate: doc.data().dueDate
				});
			});
            console.log(response.json(tasks));
			return response.json(tasks);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};