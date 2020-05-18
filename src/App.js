import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Home from './components/Home/Home';
import ShowListings from './components/ShowListings/ShowListings';
//import logo from './favicon.ico';
import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '', 
    password: '',
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id, 
        name: data.name,
        email: data.email,
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signIn' || route === 'register') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    } 
    this.setState({ route })
  }

  render() {
    const { route, isSignedIn, user, region } = this.state;
    return(
      <div className="App">
        <div>~*~*~ SUPER COOL APP ~*~*~</div>
        { route === 'home' 
          ? <div>
              <Home user = {user} />
              <ShowListings />
            </div> 
          : (route === 'signin'
             ? <div>
                  <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
                  <ShowListings />
               </div>
             : (route === 'register'
                ? <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
                : (route === 'changepassword'
                   ? <ChangePassword onRouteChange={this.onRouteChange} loadUser={this.loadUser} user = {user} /> 
                   : (route === 'deleteaccount' 
                      ? <DeleteAccount onRouteChange={this.onRouteChange} user = {user} /> 
                      : <div></div>))))
        }
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn={isSignedIn} currentRoute = {route} />
        </div>
    );
  }
}

export default App;


//add logo eventually...
//<img src={logo} width="50"/>

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/