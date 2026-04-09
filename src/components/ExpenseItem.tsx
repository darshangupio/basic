import type { Expense } from '../types/expense';

interface Props {
  expense: Expense;
  onDelete: (id: string) => void;
}

const ExpenseItem = ({ expense, onDelete }: Props) => {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <span className="expense-category">{expense.category}</span>
        <h3 className="expense-title">{expense.title}</h3>
      </div>
      <div className="expense-actions">
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
        <button
          className="delete-btn"
          onClick={() => onDelete(expense.id)}
          aria-label="Delete expense"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
