const ExpenseFilter=(props)=>{
    const dropDownHandler=(e)=>{
     props.onChangeFilter(e.target.value)
    }

return(
    <div>
        <label>Filter</label>
        <input value={props.selected} onChange={dropDownHandler}></input>
    </div>
)

}

export default ExpenseFilter
