import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Text } from './text';
import { Card } from './card';
import { Button } from './button';
import type { ReactComponent } from '@/types/react';

type Props = {
  error?: Error;
};

export const FallbackErrorNotice: ReactComponent<Props> = ({ error }) => {
  const { t } = useTranslation();

  return (
    <div className="grid place-items-center h-screen bg-gray-100">
      <Card className="max-w-[600px] w-full">
        <Text size="xl" as="h1" className="mb-3">
          {t('app.error.title')}
        </Text>
        <Text className="mb-6">{t('app.error.text')}</Text>
        {error && (
          <div className="text-sm text-gray-900 border border-gray-300 bg-gray-200 w-full p-4 mb-6">
            <Text className="font-mono">
              <span className="font-semibold">{error.name}</span>
              {`: ${error.message}`}
            </Text>
          </div>
        )}
        <div className="flex justify-end">
          <Button onClick={() => window.location.reload()}>{t('app.error.button')}</Button>
        </div>
      </Card>
    </div>
  );
};

export const AppErrorBoundary: ReactComponent = ({ children }) => {
  return <ErrorBoundary fallback={<FallbackErrorNotice />}>{children}</ErrorBoundary>;
};
