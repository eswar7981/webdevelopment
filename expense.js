import './expenseItem.css';


function ExpenseItem(loca){



    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Expenses Items</h2>
                <a>Food Rs </a><br></br>
                <a>Petrol Rs 100</a><br></br>
                <div className='expense-item__price'><a>Movies Rs 200</a><br></br>
                </div>
               
                <a>locationofExpenditure</a>
                <a>Shopping mall</a>
                <a>{loca.locat}</a>
             
            </div>
        </div>
      )

    }
export default ExpenseItem;
