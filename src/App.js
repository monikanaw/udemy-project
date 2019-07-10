import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

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
      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
      }
    }

    const classes = [];
     if(this.state.persons.length <= 2) {
       classes.push('red');
     }
     if(this.state.persons.length <= 1) {
       classes.push('bold');
     }

    return (
       <div className="App">
         <h1> Hi, I am react App </h1>
         <p className={classes.join(' ')}> This is </p>
         <button
          style={style}
           onClick={this.togglePersonHandler}>Switch Name</button>
         {persons}
       </div>
    );
  }
}


export default Radium(App);
