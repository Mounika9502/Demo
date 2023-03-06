import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart=(props)=>{
    const dataPointValues=props.datapoints.map(datapoint=>datapoint.value);
    const totalMaxValue=dataPointValues.reduce((a,v)=>a=a+v,0);
    return(  
        <div className='chart'>
            {props.datapoints.map((datapoint)=>(
                <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaxValue} label={datapoint.label}/>
            ))}
        </div>
    );
};
export default Chart;