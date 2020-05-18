import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, currentRoute }) => {
		if(isSignedIn && currentRoute === 'home') {
			return(
				<div>
				<p 
					onClick = {() => onRouteChange('signin')}> 
					sign out 
				</p>
				<p 
					onClick = {() => onRouteChange('changepassword')}> 
					change your password
				</p>
				<p 
					onClick = {() => onRouteChange('deleteaccount')}> 
					delete your account
				</p>
				</div>
			)
		} else {
			if (currentRoute === 'register') {
				return (
					<p
						onClick = {() => onRouteChange('signin')}> 
						sign in
					</p>
				)
			} else if (currentRoute === 'deleteaccount' || currentRoute === 'changepassword') {
				return (
					<p
						onClick = {() => onRouteChange('home')}> 
						nevermind, take me home!
					</p>
				)	
			}
		}
		return ( <nav></nav>)
}

export default Navigation;
