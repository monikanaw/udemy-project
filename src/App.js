import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { name: "Max", age:"28"},
      { name: "Stephanie", age:"31"},
      { name: "Stephanie", age:"31"}
    ]
  }

  switchNameHandler = () =>{

  }

  render() {
    return (
       <div className="App">
         <h1> Hi, I am react App </h1>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
         <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Racing</Person>
         <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
       </div>
    );
  }
}


export default App;
