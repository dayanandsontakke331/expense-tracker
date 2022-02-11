import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm =(props) => {

        const [title , setTitle] = useState("Dayanand");
        const [amount, setAmount] = useState(2946.72)
        const [date, setDate] = useState(new Date())

        // const [data, setData] = useState({

        //     title: "Dayanand",
        //     amount: 0,
        //     date: ""

        // });

        // const updateTitle = (e) => {
        //     // console.log(e.target.value)
        //     setTitle(e.target.value)
        //     // setData({...data,title: e.target.value})

        // }

        const handleSubmit = (e) =>{
            
            // const month = date.toLocaleDateString("en-us", { month : "long" });
            // const year = date.getFullYear();
            // const date = date.getDay()

            const data = {
                id: Math.random().toString(),
                item:  title,
                price: amount,
                date: new Date(date)
                // date: new Date(date).toLocaleDateString()


                // date: new Date(date)
                // date: new Date(date).toLocaleDateString()

            }
            // alert("Test Success")

            props.sendData(data); // To calling getNewExpenseData() of  NewExpense component

            e.preventDefault(); // to stop the page form reloading


            alert("Expense Data Added Successfully..!!");
            setTitle("");
            setAmount("");
            setDate("");
            
            props.setshowExpenseForm(false)
            // Form data strored in object
            // const data = {
            //     title: data.title,
            //     amount: data.amount,
            //     date: data.date
            // }

           
            console.log(data)

        }


    return (
        
            <form onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">

                            <label>Title</label>
                            {/* <input type="text" onChange={updateTitle} value={title} /> */}
                            <input type="text" onChange={(e)=> setTitle(e.target.value) } value={title} />


                        </div>

                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" onChange={(e)=> setAmount(e.target.value)} value={amount} />
                            {/* <input type="number" onChange={(e)=> setData({...data, amount: e.target.value})} value={data.amount} /> */}
                        </div>

                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" onChange={(e)=>setDate(e.target.value) } value={date}/>
                            {/* <input type="date" onChange={(e)=> setData({...data, date:e.target.value})}  value={data.date} /> */}
                        </div>
                    </div>

                    <div className="new-expense__actions">
                        {/* <label>Date</label> */}

                        <button type="button" onClick={()=>{props.setshowExpenseForm(false)}}>Cancel</button>
                        <button type="submit">Add Expense</button>

                    </div>

                </form>
        
    )
}

export default  ExpenseForm;
   