import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  soft?: boolean;
  blueSoft?: boolean;
  tight?: boolean;
  as?: React.ElementType;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  dark = false,
  soft = false,
  blueSoft = false,
  tight = false,
  as: Tag = 'section',
}) => {
  const cls = [
    'section',
    tight ? 'section--tight' : '',
    dark ? 'section--dark' : '',
    soft ? 'section--soft' : '',
    blueSoft ? 'section--blue-soft' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag id={id} className={cls}>
      <div className="container">{children}</div>
    </Tag>
  );
};

export default Section;
