import React, { Component } from 'react';

class ChangePassword extends Component {

	constructor(props) {
		super();
		this.state = {
			newPassword1: '',
			newPassword2: ''
		}
	}

	onPassword1Change = (event) => {
		this.setState({ newPassword1: event.target.value })
	}

	onPassword2Change = (event) => {
		this.setState({ newPassword2: event.target.value })
	}

	onSubmitChange = () => {
	  if (this.state.newPassword1 === this.state.newPassword2) {
		fetch('http://localhost:3002/changepassword', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.user.id,
				newPassword: this.state.newPassword2
			})
		})
		.then(response => response.json()) 
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	  } else {
	  	console.log("passwords do not match");
	  }
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<article>
			<main>
			<div>
			<fieldset>
				<legend>change password</legend>
				<div>
					<label
						htmlFor="password">
						new password 
					</label>
					<input
						type="password"
						onChange={this.onPassword1Change}
					/>
				</div>
				<div>
					<label 
						htmlFor="password">
						confirm new password 
					</label>
					<input
						type="password"
						onChange={this.onPassword2Change}
					/>
				</div>
			</fieldset>
				<div>
					<input
						onClick={this.onSubmitChange}
						type="submit"
					/>
				</div>
			</div>
			</main>
			</article>
		)
	}
}

export default ChangePassword;