const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const func1= (e) => {
    setTitle(e.target.value);
  };
   

  const func2= (e) => {
    setDate(e.target.value);
  };

  const func3= (e) => {
    setAmount(e.target.value);
  };



  return (
    <div className="new-expense">
      <form>
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
        
      </form>
      <button>submit</button>
    </div>
  );
};

export default ExpenseForm;
ry
