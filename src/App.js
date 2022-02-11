import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyData =[
  {
    id : "exp1",
    date : new Date(2021, 6, 12),
    item : "New TV",
    price : 799.99
},
{
  id : "exp2",
  date : new Date(2021, 4, 24),
  item : "Insurance",
  price : 294.67
},
{
id : "exp3",
date : new Date(2021, 5, 13),
item : "New Desk (Wooden)",
price : 450.99
},
{
  id : "exp4",
  date : new Date(2021, 3, 18),
  item : "Shworoom",
  price : 450.99
  },
{
  id : "exp5",
  date : new Date(2022, 2, 16),
  item : "New Laptop",
  price : 450.99
  },
  {
    id : "exp6",
    date : new Date(2020, 2, 23),
    item : "New Laptop",
    price : 690.99
    },
    
    // {
    //   id : "exp7",
    //   date : new Date(2019, 2, 23),
    //   item : "New Bike",
    //   price : 889.99
    //   },
      // {
      //   id : "exp8",
      //   date : new Date(2019, 2, 23),
      //   item : "Table Cloths",
      //   price : 1099.99
      //   },
];

function App() {


const [expenseData, setExpenseData] = useState(dummyData)


const getNewExpenseRecord = (data) => {
  console.log(data)

  // setExpenseData(prev =>  [data, ...prev])
  setExpenseData([data, ...expenseData])
  // setExpenseData([data, ...expenseData])


}


  return (
    <div className="App">

      
      <NewExpense readExpenseData={getNewExpenseRecord}  />

      
     
      <Expenses expenseData={ expenseData }/>
  
    </div>
  );
}

export default App;
