import React from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export default function SectionContainer({ children, className = '', id, ...props }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 lg:py-24 first-of-type:pt-8 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
