import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Tasks from "./components/Tasks";

function App() {
	const myTasks = [];
	const [tasks, setTasks] = useState(myTasks);
	const [content, setContent] = useState("");
	const [oldContent, setOldContent] = useState("");
	const [editBtn, setEditBtn] = useState(false);

	const addTask = (text) => {
		setTasks((prevTasks) => {
			return [...prevTasks, text];
		});
	};

	const editTask = (itemId, content) => {
		setContent(content);
		setOldContent(itemId);
		setEditBtn(true);
	};

	const submitEditedTask = () => {
		editSubmitted();
		setContent("");
		setEditBtn(false);
	};

	const editSubmitted = () => {
		setTasks((prevTasks) => {
			return prevTasks.map((item) => {
				if (item.id === oldContent) {
					return { ...item, content: content };
				}
				return item;
			});
		});
	};

	return (
		<div className="App text-center">
			<Card
				content={content}
				setContent={setContent}
				items={tasks}
				onAddTask={addTask}
				submitEditedTask={submitEditedTask}
				editButton={editBtn}
				setEditBtn={setEditBtn}
			/>
			<Tasks
				content={content}
				setContent={setContent}
				setTasks={setTasks}
				items={tasks}
				editTask={editTask}
			/>
		</div>
	);
}

export default App;
