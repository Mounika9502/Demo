import React, { useState } from 'react';
import ExpForm from './ExpForm';
import './NewExp.css';
const NewExp=(props)=>{
    const [stt,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpeneseData)=>{
        const expenseData={...enteredExpeneseData,id:Math.random().toString()};
        props.onAddExpense(expenseData);
    };
    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const cancelHandler=()=>{
        setIsEditing(false);
    }
    return (
      <div className="new-expense">
        {!stt?<button onClick={startEditingHandler}>Add New Expense</button>:
        <ExpForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
        
      </div>
    );
}
export default NewExp;