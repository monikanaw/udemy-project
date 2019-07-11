import React from 'react';

const cockpit = (props) => {
  const classes = [];
   if(props.persons.length <= 2) {
     classes.push('red');
   }
   if(this.state.persons.length <= 1) {
     classes.push('bold');
   }
  return(
    <div>
        <h1> Hi, I am react App </h1>
        <p className={classes.join(' ')}> This is </p>
        <button
         style={style}
         onClick={this.togglePersonHandler}>Switch Name</button>
    </div>
  );
};

export default cockpit;
