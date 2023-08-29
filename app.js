import logo from './logo.svg';
import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import { useState } from 'react';

const a=[{name:"Car loan",amount:400,date:new Date(2020,4,14)},
  {name:"Insurance",amount:300,date:new Date(2020,4,14)},
  {name:"Food",amount:1400,date:new Date(2020,4,14)}
]

function App(props) {
  const[expenses,setExpenses]=useState(a);

  const saveExpensehandler=expense=>{
    setExpenses((prevExpenses)=>{
      return [expenses,...prevExpenses]
      console.log(expenses)
    })
  }

  const [filterYear,setFilterYear]=useState('')

  const filteredExpenses=a.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  })

  const filterChangeHandler=selectYear=>{
    setFilterYear(selectYear);
  };

  return (
    <div className="App">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}> </ExpenseFilter>
      {a.map((s)=><ExpenseItem key={s.id} title={s.name} amount={s.amount} date={s.date}></ExpenseItem>
      

     
)}

     {filteredExpenses.map((expense)=>{
      <ExpenseItem>
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      </ExpenseItem>
     })}
    
      <ExpenseForm onSaveExpense={saveExpensehandler}></ExpenseForm>
    </div>
  );
}

export default App;

