import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES =[
        {
      id: 'e1',
      title: 'Book',
      amount: 1050,
      date: new Date(2023, 3, 7)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 4000,
      date: new Date(2022, 2, 5)
    },
    {
      id: 'e3',
      title: 'Digital Watch',
      amount: 5000,
      date: new Date(2023, 0, 7)
    },
    {
      id: 'e4',
      title: 'Restaurant',
      amount: 2500,
      date: new Date(2023, 1, 10)
    },
    ]

function App() {
    const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>{
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses ]
      })
    }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>  
  );
}

export default App;
