import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name
    };
    console.log(user.name);
    axios.post(`http://localhost:8080/`,user)
      .then(res => {
        if(res.data){
          alert('Data sent');
        }
        else{
          alert('Data not sent');
        }
      })
  }

  render(){
    return (
      <div>
      <input type="text" name="name" onChange={this.handleChange} />
      <button type="submit" onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default App;
