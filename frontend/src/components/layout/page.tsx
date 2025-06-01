import type { ReactComponent } from '@/types/react';

export type PageProps = {};

export const Page: ReactComponent<PageProps> = ({ children }) => {
  return <div className="bg-gray-50 min-h-screen">{children}</div>;
};
