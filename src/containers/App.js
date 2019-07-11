import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
    }



    return (
       <div className="App">

         {persons}
       </div>
    );
  }
}


export default App;
