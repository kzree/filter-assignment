import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Container, Page } from '@/components/layout';
import { Card, Text } from '@/components/common';
import { FilterFormWithContext, FilterTable } from '@/components/page-components';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { t } = useTranslation();
  return (
    <Page title="filters">
      <Container className="py-10">
        <Card>
          <Text size="2xl" as="h1" className="pb-10" bold>
            {t('page.filters.heading')}
          </Text>
          <FilterTable />
          <FilterFormWithContext />
        </Card>
      </Container>
    </Page>
  );
}
