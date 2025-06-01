import type { ReactComponent } from '@/types/react';
import { usePageTitle } from '@/util/hooks';

export type PageProps = {
  title?: string;
};

export const Page: ReactComponent<PageProps> = ({ title, children }) => {
  usePageTitle({ pageName: title });

  return <div className="bg-gray-50 min-h-screen">{children}</div>;
};
