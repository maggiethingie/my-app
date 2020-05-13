import React, { Component } from 'react';

class Register extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value })
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3002/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json()) 
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render() {
		return (
			<article>
			<main>
			<div>
				<fieldset>
					<legend>register</legend>
					<div>
						<label
							htmlFor="name">
							name
						</label>
						<input 
							type="text"
							name="name"
							id="name"
							onChange={this.onNameChange}
						/>
					</div>
					<div>
						<label
							htmlFor="email-address">
							email
						</label>
						<input
							type="email"
							name="email-address"
							id="email-address"
							onChange={this.onEmailChange}
						/>
					</div>
					<div>
						<label
							htmlFor="password">
							password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							onChange={this.onPasswordChange}
						/>
					</div>
				</fieldset>
				<div>
					<input
						onClick={this.onSubmitRegister}
						type="submit"
						value="Register"
					/>
				</div>
			</div>
			</main>
			</article>
		);
	}
}

export default Register;