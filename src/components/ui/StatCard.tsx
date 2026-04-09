interface Props {
  label: string;
  value: string;
  tone?: 'primary' | 'danger' | 'neutral';
}

const StatCard = ({ label, value, tone = 'neutral' }: Props) => {
  return (
    <div className={`stat-card tone-${tone}`}>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
    </div>
  );
};

export default StatCard;
