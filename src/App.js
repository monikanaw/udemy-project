import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id:'k' , name: "Max", age:"28"},
      { id: 'hhh' , name: "Manu", age:"31"},
      { id:'jj' , name: "Stephanie", age:"31"}
    ],
    otherState: 'some other value',
    showPerson: false
  }

 deletePersonHandler = (personIndex) => {
   const persons = this.state.persons.slice();
  // const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
 }

  nameChangeHandler = (event, id ) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });

   const person = {
     ...this.state.persons[personIndex]
   };

   //const person = Object.assign({}, this.state.person[personIndex]);

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
   const doesShow = this.state.showPerson;
   this.setState({
     showPerson: !doesShow
   })
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
         {this.state.persons.map((person, index) => {
           return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangeHandler(event, person.id)}/>
         })}
        </div>
      );
    }

    return (
       <div className="App">
         <h1> Hi, I am react App </h1>
         <button className="button"
           onClick={this.togglePersonHandler}>Switch Name</button>
         {persons}
       </div>
    );
  }
}


export default App;
