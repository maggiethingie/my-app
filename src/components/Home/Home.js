import React, { Component } from 'react';

class Home extends Component {

	constructor(props) {
		super();
		this.state = {

		}
	}

	render() {
		const { user } = this.props;
		return (
				<div>
					<header>hello {user.name}</header>
				</div>
		)
	}
}

export default Home;