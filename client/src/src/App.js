import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}
  
  componentDidMount() {
    fetch('/users').then( (response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then((users) => { 
      this.setState({users})
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
