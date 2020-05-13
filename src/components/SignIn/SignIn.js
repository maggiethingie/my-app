import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {

	constructor(props) {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: '',
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3002/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
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
		const { onRouteChange } = this.props;
		return (
			<article>
			<main>
			<div>
			<fieldset id="sign_up">
				<legend>Sign In</legend>
				<div>
					<label
						htmlFor="email-address">
						email 
					</label>
					<input
						type="email"
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
						onChange={this.onPasswordChange}
					/>
				</div>
			</fieldset>
				<div>
					<input
						onClick={this.onSubmitSignIn}
						type="submit"
					/>
				</div>
				<div>
					<p 
						onClick={() => onRouteChange('register')}>
						register 
					</p>
				</div>
			</div>
			</main>
			</article>
		)
	}
}

export default SignIn;