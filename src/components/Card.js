import React from "react";

const Card = (props) => {
	const getText = (e) => {
		props.setContent(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (props.editButton) {
				props.submitEditedTask();
				props.setContent("");
				props.setEditBtn(false);
				return;
			}
			submit();
		}
	};

	function randKey() {
		return Math.floor(Math.random() * 1000) + 1;
	}

	function generateUniqueKeyOrReturnExisting(props) {
		const existingKeys = props.items.map((item) => item.id);
		let key = randKey();

		while (existingKeys.includes(key)) {
			key = randKey();
		}

		return key;
	}

	const submit = () => {
		if (props.content === "") {
			return;
		}
		let finalContent = {
			id: generateUniqueKeyOrReturnExisting(props),
			content: props.content,
		};
		props.onAddTask(finalContent);
		props.setContent("");
	};
	return (
		<div
			style={{ backgroundColor: "#333333" }}
			className="bg-white shadow-md p-6 rounded-lg sm:w-11/12 md:w-11/12 lg:w-1/2 mx-auto mt-10">
			<h2 className="text-xl text-white font-semibold mb-4">Daily Note</h2>
			<input
				onChange={getText}
				onKeyDown={handleKeyDown}
				className="border border-grey-500 w-full p-2.5 bg-slate-500 text-white text-bold focus:outline-dark"
				type="text"
				value={props.content}
			/>
			<button
				style={{ display: props.editButton ? "" : "none" }}
				onClick={props.submitEditedTask}
				className="mt-4 bg-blue-600 py-2 px-3 rounded-md hover:bg-purple-500 text-white mr-2">
				Update
			</button>
			<button
				style={{ display: !props.editButton ? "" : "none" }}
				onClick={submit}
				className="mt-4 bg-blue-600 py-2 px-3 rounded-md hover:bg-blue-500 text-white">
				Add Goal
			</button>
		</div>
	);
};

export default Card;
