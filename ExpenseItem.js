import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props)=> {
  const func=()=>{
    console.log("hii")
  }

  return (
    <div className="expense-item">
       <ExpenseDate date={props.date} ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className=" expense-item__price ">{props.amount}</div>
       <button onClick={func}>delete</button>
    </div>
  );
}

export default ExpenseItem;
