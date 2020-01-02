import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted, onDoneTask, onImportantTask}) => {

	

	const elements = todos.map((item) => {

		const {id, ...itemProps} = item;

		return (
			<li className="list-group-item" key = {id}>
				<TodoListItem {...itemProps} 
 				onDeleted = {() => onDeleted(id)}
 				onDoneTask = {() => onDoneTask(id)}
 				onImportantTask = {() => onImportantTask(id)}
				/>
			</li>
		);
	});

	return (
	<ul className="list-group todo-list">
		{ elements }
	</ul>	
	);
};

export default TodoList;
