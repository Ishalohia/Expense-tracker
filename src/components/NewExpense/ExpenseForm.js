import React, {useState}  from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const[enterTitle, setEnterTitle] = useState('');
    const[enterAmount, setEnterAmount] = useState('');
    const[enterDate, setEnterDate] = useState('');
    // const [useInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //      enterDate: '',
    // })
    const titleChangeHandler = (event) =>{
        setEnterTitle(event.target.value)
        //methods-1
        // setUserInput({
        //     ...useInput,
        //     enterTitle: event.target.value,
        // })
        //methods-2
        // setUserInput((prevState) =>{
        //     return {...prevState, enterTitle: event.target.value,}
        // });
    }
     const amountChangeHandler = (event) =>{
        setEnterAmount(event.target.value);
        // setUserInput({
        //     enterAmount : event.target.value,
        // })
    }
    const dateChangeHandler = (event) =>{
        setEnterDate(event.target.value);
        // setUserInput({
        //     enterDate : event.target.value,
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        };

       props.onSaveExpenseData(expenseData);
       setEnterTitle(' ');
       setEnterAmount(' ');
       setEnterDate(' ');

    };

    return(
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="date" value={enterDate} min="2019-01-01"  max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className='.new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
    </div>
    </form>
    );
};

export default ExpenseForm;