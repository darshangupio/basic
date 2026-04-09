import ExpenseSummary from './components/ExpenseSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import LearningGuide from './components/LearningGuide';
import Card from './components/ui/Card';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <div className="container">
        <header className="app-header">
          <p className="eyebrow">React Concepts Practice Project</p>
          <h1>Expense Tracker <span className="lite">Lite</span></h1>
          <p className="subtitle">
            Track spending while practicing smart components, reusable UI, composition,
            context, and the children prop.
          </p>
        </header>

        <main className="page-stack">
          <Card
            title="Quick Summary"
            subtitle="These cards are reusable presentational components."
          >
            <ExpenseSummary />
          </Card>

          <section className="app-main">
            <Card
              title="Add New Expense"
              subtitle="ExpenseForm is a smaller focused component."
            >
              <ExpenseForm />
            </Card>

            <Card
              title="Your History"
              subtitle="ExpenseList reads shared data from context instead of prop drilling."
            >
              <ExpenseList />
            </Card>
          </section>

          <LearningGuide />
        </main>
      </div>
    </ExpenseProvider>
  );
}

export default App;
