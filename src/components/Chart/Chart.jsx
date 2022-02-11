import React from "react";
import ChartBar from "./ChartBar";

const Chart =(props)=> {
    console.log("Inside Chart.js")
    console.log(props.dataPoints)

    let priceArray = props.dataPoints.map(row => row.price)
    let maxPrice = Math.max(...priceArray)
    console.log(maxPrice)
    

    return(
        <div className="Chart">



            {
                props.dataPoints.map((record)=>{
                    return <ChartBar label={record.label} value={record.price} maxValue={maxPrice} />
                })
            }

            {/* <ChartBar label="Fab" value= {70} maxValue={0} /> */}

        </div>
    )
}
export default Chart;