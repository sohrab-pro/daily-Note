import React from "react";

const Tasks = (props) => {
	const deleteTask = (itemId) => {
		props.setTasks((prevTasks) => {
			return prevTasks.filter((item) => item.id !== itemId);
		});
	};

	const addedTasks = props.items.map((item, index) => {
		return (
			<li
				className="my-3.5 mx-3 rounded-md py-2.5 bg-gray-700 text-white flex justify-between items-center"
				key={item.id}>
				<span className="mx-5 text-bold">{index + 1}.</span>
				<span className="text-bold">{item.content} </span>
				<span>
					<button
						className="ml-5 bg-blue-500 py-1 mr-3 px-3 rounded-md"
						onClick={() => props.editTask(item.id, item.content)}>
						Edit
					</button>
					<button
						className="ml-1 bg-red-500 py-1 mr-3 px-3 rounded-md"
						onClick={() => deleteTask(item.id)}>
						Delete
					</button>
				</span>
			</li>
		);
	});

	return (
		<div
			className="mt-5 py-4 bg-white sm:w-11/12 md:w-11/12 lg:w-1/2 text-center mx-auto rounded-md"
			style={{ backgroundColor: "#333333" }}>
			<ol>{addedTasks.length === 0 ? <li>No Tasks Found</li> : addedTasks}</ol>
		</div>
	);
};

export default Tasks;
