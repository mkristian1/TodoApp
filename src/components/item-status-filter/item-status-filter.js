import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {



	render() {
		const {onActiveElement, onAllElement, onDoneElement} = this.props;
		return(
		<div className="btn-group d-flex">
			<button onClick={onAllElement} type="button" className="btn btn-info">All</button>
			<button onClick={onActiveElement} type="button" className="btn btn-outline-secondary">Active</button>
			<button onClick={onDoneElement} type="button" className="btn btn-outline-secondary">Done</button>
		</div>
	);
	}
}