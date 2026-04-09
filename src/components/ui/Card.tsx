import type { ReactNode } from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

const Card = ({ title, subtitle, className = '', children }: Props) => {
  return (
    <section className={`card glass ${className}`.trim()}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Card;
