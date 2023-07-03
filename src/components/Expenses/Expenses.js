import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const getYearHandler = (yearData) => {
        setYear(yearData);
    }

    const expensesByYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter 
                getYear = {getYearHandler}
                defaultYear = {year}
            />
            <ExpensesChart expenses = {expensesByYear}/>
            <ExpensesList items = {expensesByYear} />
        </Card>
    )
}

export default Expenses;