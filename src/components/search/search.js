import React, {Component} from 'react';
import './search.css';

export default class Search extends Component {
	
	searchText = (e) => {

		this.props.searchItem(e.target.value.toLowerCase());
	}



	render() {
		return(
			<input onChange={this.searchText}  className="form-control search" placeholder="search"/>
			);
		};
};

