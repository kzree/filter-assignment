import clsx from 'clsx';
import type { ReactComponent } from '@/types/react';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button: ReactComponent<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      className={clsx(
        'cursor-pointer px-3 py-1 rounded transition-all',
        'bg-amber-400 hover:bg-amber-500',
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
