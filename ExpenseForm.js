import './ExpenseForm.css'


import {useState} from 'react' 

const ExpenseForm=()=>{
       const [title,setTitle]=useState("nothing")
       const [amount,setAmount]=useState("nothing")
       const [date,setDate]=useState("nothing")
      
const func=(e)=>{
    setTitle(e.target.value)
    
}


return(
    <div className="new-expense">
        <form>
            <label>Title</label><br></br>
            <div classNxame="expenses">
            <label>{title}</label>
            </div>
            <br></br>
            <input onChange={func}></input>
        </form>
       <button >submit</button>

    </div>
)
}


export default ExpenseForm
