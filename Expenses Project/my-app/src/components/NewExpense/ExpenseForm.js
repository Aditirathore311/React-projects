import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // working with multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // using one state instead making three slices
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // first method
    setEnteredTitle(event.target.value);
    // second method
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // third method (updating state that depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ... prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // first method
    setEnteredAmount(event.target.value);
    // second method
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // third method (updating state that depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ... prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // first method
    setEnteredDate(event.target.value);
    // second method
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // third method (updating state that depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ... prevState, enteredDate: event.target.value };
    // });
  };

  // created a shared handler function
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setEnteredTitle(value);
  //   }else if (identifier === 'date') {
  //     setEnteredDate(value);
  //   }else {
  //     setEnteredAmount(value);
  //   }
  // };

  // Handling form submission 
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
