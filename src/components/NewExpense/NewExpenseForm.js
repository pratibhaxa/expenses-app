import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const titleChangeHandler = (e) => {
    //     setInputTitle(e.target.value);
    //     console.log(inputTitle);
    // }
    // const amountChangeHandler = (e) => {
    //     setInputAmount(e.target.value);
    //     console.log(inputAmount);
    // }
    // const dateChangeHandler = (e) => {
    //     setInputDate(e.target.value);
    //     console.log(inputDate);
    // }

    const inputHandler = (identifier, value) => {
        if (identifier === 'title') {
            setInputTitle(value);
            // console.log(inputTitle);
        }
        else if (identifier === 'amount') {
            setInputAmount(value);
            // console.log(inputAmount);
        }
        else if (identifier === 'date') {
            setInputDate(value);
            // console.log(inputDate);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        }
        
        props.onSaveExpenseData(expenseData);
        props.stopEditingHandler();

        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={inputTitle}
                        onChange={(e) => {inputHandler('title', e.target.value)}} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0,01' 
                        step='0.01' 
                        value={inputAmount}
                        onChange={(e) => {inputHandler('amount', e.target.value)}} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={inputDate}
                        onChange={(e) => {inputHandler('date', e.target.value)}} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.stopEditingHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;