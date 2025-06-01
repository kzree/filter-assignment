import { clsx } from 'clsx';
import type { ReactComponent } from '@/types/react';

export type ContainerProps = {
  noPadding?: boolean;
  className?: string;
};

export const Container: ReactComponent<ContainerProps> = ({
  className,
  children,
  noPadding = false,
}) => {
  const classes = clsx('container mx-auto', className, !noPadding ? 'px-4' : '');

  return <div className={classes}>{children}</div>;
};
