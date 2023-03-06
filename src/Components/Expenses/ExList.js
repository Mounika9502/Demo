import React from 'react';
import './ExList.css';
import ExItem from './ExItem';
const ExList=(props)=>{

    if(props.item.length===0){
        return<h2 className='expenses-list__fallback'>No Expense</h2>
    }
    return(
        <ul className='expenses-list'>
            {props.item.map((expense)=>(
                <ExItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
            ))}
        </ul>
    );
}
export default ExList;