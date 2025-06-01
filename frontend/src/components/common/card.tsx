import clsx from 'clsx';
import type { ReactComponent } from '@/types/react';

type CardProps = {
  className?: string;
};

export const Card: ReactComponent<CardProps> = ({ className, children }) => {
  return <div className={clsx('bg-white rounded shadow p-8', className)}>{children}</div>;
};
