import clsx from 'clsx';
import type { ReactComponent } from '@/types/react';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button: ReactComponent<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-1 rounded transition-all font-semibold',
        'bg-amber-400 hover:bg-amber-500',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
