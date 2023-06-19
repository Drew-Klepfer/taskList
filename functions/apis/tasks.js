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

exports.postOneTask = (request, response) => {
	console.log(request.body.description.trim(), request.body.title.trim(), request.body.status.trim())
	/* empty input check */
	if (request.body.description.trim() === '') {
		return response.status(400).json({ description: 'Must not be empty' });
    }
    
    if(request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }

	if(request.body.status.trim() === '') {
        return response.status(400).json({ status: 'Must not be empty' });
    }
    
    const newTaskItem = {
        title: request.body.title,
        description: request.body.description,
        createdAt: new Date().toISOString(),
		//dueDate: request.body.dueDate,
		status: request.body.status
    }
	/* add new task to tasks firestore collection */
    db
        .collection('tasks')
        .add(newTaskItem)
        .then((doc)=>{
            const responseTaskItem = newTaskItem;
            responseTaskItem.id = doc.id;
            return response.json(responseTaskItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};