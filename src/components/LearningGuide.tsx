import Card from './ui/Card';

const concepts = [
  {
    title: 'Smart vs Dumb Components',
    description:
      'The provider stores state and actions, while presentational components mostly focus on what the user sees.',
  },
  {
    title: 'Reusable Components',
    description:
      'Card and StatCard are generic building blocks that can be reused in many parts of the UI.',
  },
  {
    title: 'Component Composition',
    description:
      'The page is built by combining smaller parts, like cards, forms, stats, and lists into one screen.',
  },
  {
    title: 'Props Drilling',
    description:
      'Instead of passing the same data through many layers, Context lets components read shared expense data directly.',
  },
  {
    title: 'Children Prop',
    description:
      'The Card component accepts children so different content can be placed inside the same reusable wrapper.',
  },
];

const LearningGuide = () => {
  return (
    <Card
      title="What This Project Teaches"
      subtitle="These are the React ideas added into the code you wrote today."
      className="learning-card"
    >
      <div className="concept-list">
        {concepts.map((concept) => (
          <article key={concept.title} className="concept-item">
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
          </article>
        ))}
      </div>
    </Card>
  );
};

export default LearningGuide;
