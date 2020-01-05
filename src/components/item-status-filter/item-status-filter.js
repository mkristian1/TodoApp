import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {

	buttonsArr = [
			{name: 'All', label: 'all'},
			{name: 'Active', label: 'active'},
			{name: 'Done', label: 'done'}
		];


	render() {
		const {onStatus, status} = this.props;

		const buttons = this.buttonsArr.map(({name, label}) => {
		const btnClass = label === status ? 'btn-info' : 'btn-outline-secondary';
			return(
				<button onClick={() => onStatus(label)} type="button" className={`btn ${btnClass}`} key={name}>{name}</button>
			);
		});
		
		return(
		<div className="btn-group d-flex">
			{buttons}
		</div>
	);
	}
}