import React, {useState} from "react";
import "./Expenses.css"
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = ({ expenseData }) => {

    const [filteredYear, setfilteredYear] = useState("2020")

    const updateFilterYear = (year) => {

        console.log("inside Expenses");
        console.log(year);
        setfilteredYear(year)
       
    }

    const filteredRecored = expenseData.filter((exp) => {

        console.log(exp.date.getFullYear()) // for testing purpose year is comming or not

        return exp.date.getFullYear().toString() === filteredYear.toString();

    }); 
    console.log(filteredRecored)

  
    // if (filteredRecored.length > 0) {
    //     records = filteredRecored.length
    // }

    return(
        <Card className="expenses">
            {/* <ExpenseItem expenseData = {expenseData[0]} months={months}/> */}
            {/* <ExpenseItem expenseData = {expenseData[0]} />
            <ExpenseItem expenseData = {expenseData[1]} />
            <ExpenseItem expenseData = {expenseData[2]} />
            <ExpenseItem expenseData = {expenseData[3]} /> */}

            <ExpensesFilter  updateFilterYear={updateFilterYear} filteredYear={filteredYear}/>
            
            <ExpensesChart filteredRecored={filteredRecored} />

            <ExpensesList  filteredRecored={filteredRecored}/>

            

        </Card>
    );
}
export default Expenses;