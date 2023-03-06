import './ExDate.css';
const ExDate=(props)=>{
    const mon=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    return( 
        <div className='ex_date'>
            <div className='ex_month'>{mon}</div>
            <div className='ex_year'>{year}</div>
            <div className='ex_day'>{day}</div>
        </div>
    );
   
}
export default ExDate;