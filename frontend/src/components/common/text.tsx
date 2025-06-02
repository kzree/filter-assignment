import clsx from 'clsx';
import type { ReactComponent } from '@/types/react';
import type { JSX } from 'react';

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export type TextProps = {
  as?: string;
  className?: string;
  bold?: boolean;
  semiBold?: boolean;
  size?: TextSize | 'custom';
};

export const Text: ReactComponent<TextProps> = ({
  children,
  className,
  size,
  bold = false,
  semiBold = false,
  as: element = 'p',
}) => {
  const classes = clsx(className, {
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl',
    'font-bold': bold,
    'font-semibold': semiBold,
  });

  const Element = element as keyof JSX.IntrinsicElements;
  return (
    <Element className={classes} data-testid="text">
      {children}
    </Element>
  );
};
