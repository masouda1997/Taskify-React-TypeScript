import "./App.css";
import React from "react";
import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./Model";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(todo);
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	console.log(todos);

	return (
		<DragDropContext onDragEnd={() => {}}>
			<div className="w-full h-[100vh] flex flex-col items-center bg-[#2f74c0] font-Neu">
				<header className="uppercase text-white text-[40px] my-[30px] z-10 ">
					Taskify
				</header>
				<InputField
					todo={todo}
					setTodo={setTodo}
					addHandler={handleAdd}
				/>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
			//{" "}
		</DragDropContext>
	);
};

export default App;
