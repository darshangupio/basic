import { CATEGORIES } from '../types/expense';
import { useExpenses } from '../context/ExpenseContext';
import type { Category } from '../types/expense';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses, filter, setFilter, deleteExpense } = useExpenses();

  const filteredExpenses =
    filter === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  const total = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="expense-list-container">
      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select 
          id="category-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as Category | 'All')}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="expenses-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map(expense => (
            <ExpenseItem 
              key={expense.id} 
              expense={expense} 
              onDelete={deleteExpense} 
            />
          ))
        ) : (
          <p className="no-expenses">No expenses found for this category.</p>
        )}
      </div>

      {filteredExpenses.length > 0 && (
        <div className="total-expense">
          <span>Total:</span>
          <span className="total-amount">${total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
