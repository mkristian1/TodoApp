import React, { Component } from 'react';

import AppHeader from '../app-header';
import Search from '../search';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css'

export default class App extends Component {
	itemId = 100;
	state = {
	todoData : [
	this.createTodoTask('Get up early'),
	this.createTodoTask('Drink orange juice'),
	this.createTodoTask('Create react app'),
	this.createTodoTask('Sleep')
	],
	searchValue: '',
	status: 'all'
	};

	createTodoTask(label) {
		return {
			id: this.itemId++,
			label,
			done: false,
			important: false,
		
		};
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
			return {
			   todoData: newArray
			};
		});
	};

	addTask = (text) => {

		const newTask = this.createTodoTask(text);

		this.setState(({ todoData }) => {
			const newArr = [...todoData, newTask];
			return {
			   todoData: newArr
			};

		});
		}

	taskProperty = (arr, id, status) => {
			const idx = arr.findIndex((el) => el.id === id);
			const oldItem = arr[idx];
			const newItem = {...oldItem, [status]: !oldItem[status]};
	
			return [
			...arr.slice(0, idx),newItem,
			...arr.slice(idx+1)
			]
			
	};

	onDoneTask = (id) => { 
		this.setState(({ todoData }) => {
			return {
				todoData: this.taskProperty(todoData, id, 'done')
			};
		});
	}

	onImportantTask = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.taskProperty(todoData, id, 'important')
			};
		});
	};

	

	searchItem = (text) => {
		
		this.setState({
			searchValue: text
		})
	};

	searchFilter = (data, search) => {
		if (search) {
		return data.filter(
				item => item.label.toLowerCase().indexOf(search) !== -1);
		} 
		return data;		
		};

	statusFilter(data, status) {
		switch(status) {
			case 'all':
				return data;
			case 'active':
				return  data.filter(item => !item.done);
			case 'done':
				return  data.filter(item => item.done);
			default:
				return data;
		}
	}

	onStatus = (currentStatus) => {
		
		this.setState({
			status: currentStatus
		});
	};	

	render() {

	const {todoData, searchValue, status} = this.state; 
	
	const doneCount = todoData.filter((el) => el.done).length;	
	const todoCount = todoData.length - doneCount;

	const filterData = this.statusFilter(this.searchFilter(todoData, searchValue), status);

	return(
	<div className="todo-app">
		<AppHeader theList = {todoCount} done = {doneCount}/>
		<Search searchItem = {this.searchItem} />
		<ItemStatusFilter
		onStatus = { this.onStatus }
		status = {status}
		
		 />
		<TodoList 
		todos = { filterData  } 
		onDeleted = { this.deleteItem } 
		onDoneTask = { this.onDoneTask }
		onImportantTask = { this.onImportantTask }
		/>
		<AddItem addTask = { this.addTask } />
	</div>
	)};
};

