import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useRouter } from '../utils/router';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  icon?: React.ReactNode;
  external?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  icon,
  external = false,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { navigate, path } = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-accent-emerald text-background hover:bg-emerald-400 font-semibold shadow-lg shadow-accent-emerald/10 hover:shadow-accent-emerald/25 border border-transparent',
    secondary:
      'bg-surface-elevated text-text-primary border border-surface-border hover:border-accent-emerald/40 hover:bg-surface-hover',
    outline:
      'bg-transparent text-text-primary border border-surface-border hover:border-accent-emerald/60 hover:text-accent-emerald hover:bg-accent-emerald/5',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-elevated/60',
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    if (href && !external && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      e.preventDefault();
      if (href.startsWith('#')) {
        if (path !== '/' && !path.startsWith('/#')) {
          navigate('/' + href);
        } else {
          navigate(href);
        }
      } else {
        navigate(href);
      }
    }
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer select-none',
        variantStyles[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            {icon}
          </span>
        )}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block focus:outline-none">
      {content}
    </button>
  );
};
