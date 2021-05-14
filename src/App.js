import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Home from "./components/Home"
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import NavBar from "./components/NavBar";
import Spells from "./components/Spells";
import Spellbook from "./components/Spellbook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };


  componentDidMount() {
    this.loginStatus()
  }


  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Header />
          <div className="App">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/spells" component={Spells} />
              <Route path="/spellbook" component={Spellbook} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};
export default App;
