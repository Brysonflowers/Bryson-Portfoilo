import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', title, children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      {title && (
        <>
          <h2 className="section-title">{title}</h2>
          <hr className="header-line" />
        </>
      )}
      {children}
    </section>
  );
};

export default Section;
