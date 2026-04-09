import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Category, Expense } from '../types/expense';

type ExpenseInput = Omit<Expense, 'id'>;

interface ExpenseContextValue {
  expenses: Expense[];
  filter: Category | 'All';
  setFilter: (category: Category | 'All') => void;
  addExpense: (expense: ExpenseInput) => void;
  deleteExpense: (id: string) => void;
}

const ExpenseContext = createContext<ExpenseContextValue | undefined>(undefined);

const initialExpenses: Expense[] = [
  { id: '1', title: 'Coffee', amount: 4.5, category: 'Food' },
  { id: '2', title: 'Subway', amount: 12.0, category: 'Transport' },
  { id: '3', title: 'Movie Night', amount: 25.0, category: 'Entertainment' },
];

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filter, setFilter] = useState<Category | 'All'>('All');

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);

  const addExpense = (newExpense: ExpenseInput) => {
    const expense: Expense = {
      ...newExpense,
      id: crypto.randomUUID(),
    };

    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        filter,
        setFilter,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error('useExpenses must be used inside ExpenseProvider');
  }

  return context;
};
