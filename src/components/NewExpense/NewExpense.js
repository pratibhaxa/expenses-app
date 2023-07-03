import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        }
        props.onAppExpense(expenseData);
    }

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} className='new-expense__actions'>Add New Expense</button>}
            {isEditing && 
                <NewExpenseForm 
                    onSaveExpenseData = {saveExpenseDataHandler} 
                    stopEditingHandler = {stopEditingHandler}
                />
            }
        </div>
    )
}

export default NewExpense;