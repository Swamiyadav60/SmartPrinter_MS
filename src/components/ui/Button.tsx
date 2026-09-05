import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
  'aria-label': ariaLabel,
}) => {
  const cls = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    fullWidth ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" id={id} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cls} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} id={id} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
