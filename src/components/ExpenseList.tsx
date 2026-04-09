import { CATEGORIES } from '../types/expense';
import type { Expense, Category } from '../types/expense';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
  selectedCategory: Category | 'All';
  onFilterChange: (category: Category | 'All') => void;
}

const ExpenseList = ({ expenses, onDelete, selectedCategory, onFilterChange }: Props) => {
  // 1. Filter expenses based on selected category
  const filteredExpenses = selectedCategory === 'All' 
    ? expenses 
    : expenses.filter(exp => exp.category === selectedCategory);

  // 2. Calculate total using reduce
  const total = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="expense-list-container">
      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select 
          id="category-filter"
          value={selectedCategory} 
          onChange={(e) => onFilterChange(e.target.value as Category | 'All')}
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
              onDelete={onDelete} 
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
