import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from "../ExpenseItem/ExpenseItem";


 const ExpensesList = (props) => {

    // let records = <h2 style={{ color : "white"}}> ð¨ð¨No Expense Record found...!!ð¨ð¨</h2>
    if(props.filteredRecored.length === 0){
        return <h2 className="expenses-list__fallback"> ð¨ð¨No Expense Record found...!!ð¨ð¨</h2>
    }

    // if(props.filteredRecored.length > 0 ){
    //     records = 
    // }


    return (
        <div className="expenses-list">

            {
                 props.filteredRecored.map( (row) =>{
                    return(
                        <ExpenseItem key={row.id} expenseData={row} />
                    ) 
                })
            }

            
        </div>
    )
}
export default ExpensesList
