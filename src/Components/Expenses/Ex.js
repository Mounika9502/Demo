import React, { useState } from 'react';
import ExList from './ExList';
import ExpChart from './ExpChart';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Ex.css';
const Ex=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2021');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.item.filter((expense)=>{
        return(expense.date.getFullYear().toString()===filteredYear);});
   
    return(
        <Card className='exp'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpChart expenses={filteredExpenses}/>
            <ExList item={filteredExpenses}/>
        </Card>
    );
}
export default  Ex;