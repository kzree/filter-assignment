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
  return (
    <div className={clsx('container mx-auto', className, !noPadding ? 'px-4' : '')}>{children}</div>
  );
};
