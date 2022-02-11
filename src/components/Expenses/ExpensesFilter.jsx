import React from 'react'
import "./ExpensesFilter.css"

 const ExpensesFilter =(props) => {

   

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select onChange={(e)=> props.updateFilterYear(e.target.value)} value={props.filteredYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>

            </div>
        </div>
    )
}
export default ExpensesFilter;
