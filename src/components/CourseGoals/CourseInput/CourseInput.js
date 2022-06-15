import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && 'invalid'}`}>
        <label>To-Do List</label>
        <input
          className={!isValid && 'form-control inValid'}
          type='text'
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type='submit'>Add item</Button>
    </form>
  );
};

export default CourseInput;
