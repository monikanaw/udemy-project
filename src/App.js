import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    person: [
      { name: "Max", age:"28"},
      { name: "Manu", age:"31"},
      { name: "Stephanie", age:"31"}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age:"28"},
        { name: "Manu", age:"31"},
        { name: "Stephanie", age:"31"}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "Max", age:"28"},
        { name: event.target.value, age:"31"},
        { name: "Stephanie", age:"31"}
      ]
    })
  }

  togglePersonHandler = () => {
   const doesShow = this.state.showPerson;
   this.setState({
     showPerson: !doesShow
   })
  }

  render() {
    return (
       <div className="App">
         <h1> Hi, I am react App </h1>
         <button className="button" onClick={this.togglePersonHandler}>Switch Name</button>
         {this.state.showPerson ?
          <div>
           <Person
             name={this.state.person[0].name}
             age={this.state.person[0].age}/>
            <Person
              name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={this.switchNameHandler.bind(this, 'Maxi!')}
              changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
            <Person
                name={this.state.person[2].name}
                age={this.state.person[2].age}/>
             <UserInput />
             <UserOutput userName="Monika"/>
          </div> : null}
       </div>
    );
  }
}


export default App;
