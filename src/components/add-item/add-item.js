import React, {Component} from 'react';

export default class AddItem extends Component {
	state = {
		label: ''
	};

	onLabelChange = (e) => {
		
		this.setState({
			label: e.target.value
		});
	};


	onSubmit = (e) => {

		e.preventDefault();
		if (!this.state.label) {
			alert('Empty! Please enter your task');
		} else {
		this.props.addTask(this.state.label);
		this.setState({
			label: ''
		});
		};
		
	};

	

	render () {	

		return(

			<form className="add-item d-flex" onSubmit={this.onSubmit}>
				<input onChange={this.onLabelChange} 
				className="form-control mr-1" type="text"
				placeholder="Add your task" value={this.state.label}/>
				<button className='btn btn-success'>
				<i className="fa fa-plus"></i>
				</button>
			</form>
		)
	}


}

