import { useState } from 'react';
import { CATEGORIES } from '../types/expense';
import type { Category, Expense } from '../types/expense';

interface Props {
  onAdd: (expense: Omit<Expense, 'id'>) => void;
}

const ExpenseForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Category | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !amount || !category) return;

    onAdd({
      title,
      amount: parseFloat(amount),
      category: category as Category
    });

    // Reset form
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form glass" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Description</label>
        <input 
          id="title"
          type="text" 
          placeholder="e.g. Groceries"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input 
          id="amount"
          type="number" 
          step="0.01"
          placeholder="0.00"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select 
          id="category"
          value={category} 
          onChange={(e) => setCategory(e.target.value as Category)}
          required
        >
          <option value="" disabled>Select Category</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-btn highlight">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
