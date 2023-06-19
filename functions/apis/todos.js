const { db } = require('../util/admin');

/* fetch todos from db and forward to client */
exports.getAllTodos = (request, response) => {
	db
		.collection('todos')
		.orderBy('createAt', 'desc')
		.get()
		.then((data) => {
			let todos = [];
			data.forEach((doc) => {
				todos.push({
                    todoId: doc.id,
                    title: doc.data().title,
					body: doc.data().body,
					createAt: doc.data().createAt,
				});
			});
            console.log(response.json(todos));
			return response.json(todos);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};