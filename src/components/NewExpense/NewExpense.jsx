import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

 const NewExpense = (props) => {

    const [showExpenseForm, setshowExpenseForm] = useState(false)


    const getNewExpenseData = (data) =>{

        props.readExpenseData(data)

    }




    // const showExpenseFormHandler = () =>{

    //     setshowExpenseForm(true)

    // }


    return (

        <div className='new-expense'>

            {!showExpenseForm && <button onClick={() => {setshowExpenseForm(true)}}>Add New Expense</button>}
            { // If this is true then show this expense form 
                showExpenseForm && <ExpenseForm sendData={getNewExpenseData} setshowExpenseForm={setshowExpenseForm}/> 
            }


        </div>

    )
}

export default NewExpense;