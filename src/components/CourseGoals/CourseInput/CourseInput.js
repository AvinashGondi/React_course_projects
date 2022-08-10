import React, { useState } from 'react';
// import styled from 'styled-components'

import Button from '../../UI/Button/Button';

import styles from './CourseInput.module.css'

// const FormControl =styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.inValid ? 'red' : ''}
// }

// & input {
//   display: block;
//   width: 100%;
//   color: ${props => (props.inValid ? 'red' : '')};
//   border: 1px solid ${props => (props.inValid ? 'red' : '#ccc')};
//   background-color: ${props => (props.inValid ? 'salmon' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;


const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    
    let isInList = true;
    props.onCourseGoals.map((courseGoalItem) => {

      if(event.target.value.trim() === courseGoalItem.text){
        isInList = false;
        return;
      }
      return isInList;
    });
    console.log(isInList);
    setIsValid(isInList);
    setEnteredValue(event.target.value);
  };

  const [isValid,setIsValid] = useState(true);

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0 || isValid === false){

      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" 
        value={enteredValue} 
        onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
