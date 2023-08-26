import logo from './logo.svg';
import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import { useState } from 'react';



function App(props) {
  const a=[{name:"Car loan",amount:400,date:new Date(2020,4,11)},
  {name:"Insurance",amount:300,date:new Date(2020,4,13)},
  {name:"Food",amount:1400,date:new Date(2020,4,14)}
]
 

  const [filterYear,setFilterYear]=useState('')

  const saveExpensehandler=(enteredData)=>{
   
   
  }

  const filterChangeHandler=selectYear=>{
    setFilterYear(selectYear);
  };

  return (
    <div className="App">
      
      <ExpenseItem title={a[0].name} amount={a[0].amount} date={a[0].date}></ExpenseItem>
      <ExpenseItem title={a[1].name} amount={a[1].amount} date={a[1].date}></ExpenseItem>
      <ExpenseItem title={a[2].name} amount={a[2].amount} date={a[2].date}></ExpenseItem>
     
     
       <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      <ExpenseForm onSaveExpense={saveExpensehandler}></ExpenseForm>
    </div>
  );
}

export default App;
