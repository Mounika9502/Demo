import React from 'react';
import ExDate from './ExDate';
import Card from '../UI/Card';
import './ExItem.css';
const ExItem=(props)=>{
    return(
        <li>
        <Card className="exp_item">
            <ExDate  date={props.date}/>
            <div className='exItem_title'>
                <h2>{props.title}</h2>
                <div className='exItem_amount'>${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}
export default ExItem;