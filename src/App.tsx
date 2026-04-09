import { useState, useEffect } from 'react';
import type { Expense, Category } from './types/expense';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filter, setFilter] = useState<Category | 'All'>('All');

  // Load initial data (mock side effect)
  useEffect(() => {
    const initialExpenses: Expense[] = [
      { id: '1', title: 'Coffee', amount: 4.5, category: 'Food' },
      { id: '2', title: 'Subway', amount: 12.0, category: 'Transport' },
      { id: '3', title: 'Movie Night', amount: 25.0, category: 'Entertainment' },
    ];
    setExpenses(initialExpenses);
  }, []);

  const addExpense = (newExpense: Omit<Expense, 'id'>) => {
    const expense: Expense = {
      ...newExpense,
      id: crypto.randomUUID()
    };
    setExpenses(prev => [expense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>Expense Tracker <span className="lite">Lite</span></h1>
        <p className="subtitle">Master your finances with simplicity</p>
      </header>

      <main className="app-main">
        <section className="input-section">
          <h2>Add New Expense</h2>
          <ExpenseForm onAdd={addExpense} />
        </section>

        <section className="display-section">
          <h2>Your History</h2>
          <ExpenseList 
            expenses={expenses} 
            onDelete={deleteExpense} 
            selectedCategory={filter}
            onFilterChange={setFilter}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
