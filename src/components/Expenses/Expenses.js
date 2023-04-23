import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props){
    const[filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    });

return(
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length === 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* We can also write like this --> Ternary expression */}
        {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> :
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* Thir way to do it by using variable and if condition */}
        {/* {expenseContent} */}
        <ExpenseChart expenses = {filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
    )
}
export default Expenses;