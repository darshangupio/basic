import { useExpenses } from '../context/ExpenseContext';
import StatCard from './ui/StatCard';

const ExpenseSummary = () => {
  const { expenses } = useExpenses();

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const categoriesUsed = new Set(expenses.map((expense) => expense.category)).size;
  const latestExpense = expenses[0]?.title ?? 'Nothing added yet';

  return (
    <div className="summary-grid">
      <StatCard label="Entries" value={String(expenses.length)} tone="primary" />
      <StatCard label="Total Spent" value={`$${totalSpent.toFixed(2)}`} tone="neutral" />
      <StatCard label="Categories Used" value={String(categoriesUsed)} tone="primary" />
      <StatCard label="Latest Expense" value={latestExpense} tone="danger" />
    </div>
  );
};

export default ExpenseSummary;
