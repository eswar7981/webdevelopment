import "./ExpenseForm.css";

import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  //const [userInput,setUserInput]= useState({
    //title:" ",
    //amount:" ",
   // date:" "
  //})


  const func1= (e) => {
    setTitle(e.target.value)
  };
   

  const func2= (e) => {
    setDate(e.target.value)
  };

  const func3= (e) => {
    setAmount(e.target.value)
  };
 
  const submitForm=(e)=>{
    e.preventDefault();
    const expenseData={
    title1:title,
    date1:date,
    amount1:amount}
    
  console.log(expenseData)
  }


  return (
   
      <form onSubmit={submitForm}>
        <label>Title</label>
        <br></br>
        <input type="text" onChange={func1}></input>
        <br></br>
        <div className="value-holder">
        <label>{title}</label>
        </div>
        <br></br>
        <label>Date</label>
        <input type="date" min="2011-08-2" onChange={func2}></input>
        <br></br>
        <label>{date}</label>
        <br></br>
        <label>Amount</label>
        <input type="number"  onChange={func3}></input>
        <br></br>
        <label>{amount}</label>
        <br></br>
        <button>submit</button>
      </form>
     
   
  );
};

export default ExpenseForm;
