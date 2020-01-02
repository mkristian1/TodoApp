import React from 'react';
import './app-header.css';

const AppHeader = ({theList, done}) => {
	return(
		<div className="app-header d-flex">
			<h1><i className="fa fa-tasks"></i> Todo list</h1>	
			<h2>{theList} more to do, {done} done</h2>
		</div>
		);
};

export default AppHeader;