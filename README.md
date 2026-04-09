# Basic

This project is a small expense tracker built with React, TypeScript, and Vite.
It now also works as a practice project for these React concepts:

- Smart vs dumb components
- Reusable components
- Component composition
- Props drilling and why it is bad
- Children prop

## What The App Does

- Add a new expense with title, amount, and category
- Filter expenses by category
- Delete an expense
- Show summary cards for total entries and spending
- Display a learning section that explains the concepts used in the code

## Where Each Concept Is Used

### 1. Smart vs Dumb Components

Smart components handle data and behavior.
Dumb components mostly focus on showing UI.

- Smart logic lives in [`src/context/ExpenseContext.tsx`](src/context/ExpenseContext.tsx)
- Dumb UI examples:
  - [`src/components/ExpenseItem.tsx`](src/components/ExpenseItem.tsx)
  - [`src/components/ui/StatCard.tsx`](src/components/ui/StatCard.tsx)
  - [`src/components/ui/Card.tsx`](src/components/ui/Card.tsx)

## 2. Reusable Components

Reusable components help avoid repeating the same UI code.

- [`src/components/ui/Card.tsx`](src/components/ui/Card.tsx) is used as a reusable wrapper
- [`src/components/ui/StatCard.tsx`](src/components/ui/StatCard.tsx) is used for summary boxes

## 3. Component Composition

Composition means building a page by combining smaller components together.

- [`src/App.tsx`](src/App.tsx) composes the page from:
  - `Card`
  - `ExpenseSummary`
  - `ExpenseForm`
  - `ExpenseList`
  - `LearningGuide`

## 4. Props Drilling

Props drilling happens when data is passed through many components that do not really need it, just so a deeply nested component can use it.

That becomes hard to manage in bigger apps.

This project avoids that by using Context:

- [`src/context/ExpenseContext.tsx`](src/context/ExpenseContext.tsx)

Now `ExpenseForm`, `ExpenseList`, and `ExpenseSummary` can read shared data directly without passing everything down from `App`.

## 5. Children Prop

The `children` prop lets a component wrap other content.

Example:

- [`src/components/ui/Card.tsx`](src/components/ui/Card.tsx)

The `Card` component accepts `children`, so it can hold forms, lists, summary cards, or learning notes inside the same reusable layout.

## Run The Project

```bash
npm install
npm run dev
```
