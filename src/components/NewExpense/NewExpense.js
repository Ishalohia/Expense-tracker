import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterExpenseData) =>{
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setShowForm(false);  //form will close after submitting each expenses
    };

    const[showForm, setShowForm] = useState(false);
    const showFormHandler = () =>{
        setShowForm(true);
    }
    const cancelButtonHandler = () =>{
      setShowForm(false);  //form will close after clicking cancel button
    }
  return (
    <div className='new-expense'>
    { showForm ?
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}/> :
     <button onClick={showFormHandler}>Add new Expense</button>   
    }
    </div>
  )
}
export default NewExpense;
