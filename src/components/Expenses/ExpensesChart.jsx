import React from 'react'
import Chart from '../Chart/Chart';
import "../Chart/Chart.css"


const ExpensesChart = (props) => {
    console.log(props.filteredRecored)

    let chartDataPoints = [
        { label : "Jan", price : 0 },
        { label : "Fab", price : 0 },
        { label : "Mar", price : 0 },
        { label : "Apr", price : 0 },
        { label : "May", price : 0 },
        { label : "Jun", price : 0 },
        { label : "Jul", price : 0 },
        { label : "Aug", price : 0 },
        { label : "Sap", price : 0 },
        { label : "Oct", price : 0 },
        { label : "Nov", price : 0 },
        { label : "Dec", price : 0 },
    ];

    for(let record of props.filteredRecored){
        let month = record.date.getMonth();
        chartDataPoints[month].price += record.price 
    }
    // console.log(chartDataPoints)

    return (
        <div>
            <Chart  dataPoints={chartDataPoints}/>
        </div>
    )
}
export default ExpensesChart;