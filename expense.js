import './expenseItem.css';




function ExpenseItem(a){

 
  
    return (
            <div class="expense-item">
                <a>{a.amount1}</a>
                <a>{a.location1}</a>
                <a>{a.date1}</a>
                <a>{a.title1}</a>
         


            <div className="expense-item__description">
                
                <h2>Expenses Items</h2>
                <a>Food Rs </a><br></br>
                <a>Petrol Rs 100</a><br></br>
                <div className='expense-item__price'><a>Movies Rs 200</a><br></br>
                </div>
               
                <a>locationofExpenditure</a>
                <a>Shopping mall</a>
                
             
              
            </div>
           </div>
          
       


      )

    }
export default ExpenseItem;
