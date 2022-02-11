// import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import Card from '../Card/Card';




const ExpenseItem = (props) => {
    // Javascript Code
    


    // let desc = props.expenseData.item;
    // const [desc, setDesc] = useState(props.expenseData.item);



    // const clickHandler = () =>{
    //     setDesc("updated")
    // }
    
    return(
    <Card className='expense-item'>
       
       {/* <ExpenseDate months={props.months} expenseData={props.expenseData} /> */}
       <ExpenseDate expenseData={props.expenseData} />


      <div className='expense-item__description'>
          <h2>{props.expenseData.item}</h2>
      </div>

      <div className='expense-item__price'> $ {props.expenseData.price}</div>

      <div>
          {/* <button onClick={clickHandler}> Change Title </button> */}
      </div>
    </Card>
    )
}
export default ExpenseItem;