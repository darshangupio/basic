export const CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'] as const;

export type Category = typeof CATEGORIES[number];

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: Category;
}
