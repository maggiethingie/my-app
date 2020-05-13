import React, { Component } from 'react';

class DeleteAccount extends Component {
	constructor(props) {
		console.log(props);
		console.log(props.user.id);
		super();
		this.state = {
			id: '',
			name: '',
			email: ''
		}
	}

	onDelete = () => {
		// fetch('http://localhost:3002/delete/' + this.props.user.id, {
			fetch('http://localhost:3002/delete/', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.user.id,
				name: this.props.user.name,
				email: this.props.user.email
			})
		})
		.then(() => {
			this.props.onRouteChange('signin');
		})
	}

	render() {	
		return (
			<div>
				<p 
					onClick = {this.onDelete}> 
					Click to confirm deleting your account 
				</p>
			</div>
		);
	}
}

export default DeleteAccount;