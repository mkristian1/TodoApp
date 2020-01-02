import React, {Component} from 'react';
import './todo-list-item.css'



export default class TodoListItem extends Component {


	render() {
		const {label, onDeleted, onDoneTask,
			   onImportantTask, important, done} = this.props;		

		
		let classNames = 'todo-list-item';
		if(done) {
			classNames += ' done';
		} else if (important) {
			classNames += ' important'
		}


	return (
		<span className={classNames}>
			<span onClick={ onDoneTask } className="todo-list-item-label">
			{label}
			</span>
			<button onClick= { onImportantTask } className="btn btn-outline-warning btn-sm float-right">
				<i className="fa fa-exclamation-triangle"></i>
			</button>
			<button onClick= { onDeleted } className="btn btn-outline-danger btn-sm float-right">
				<i className="fa fa-trash" aria-hidden="true"></i>
			</button>
		</span>

		)
	}

}

