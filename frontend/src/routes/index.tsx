import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Container, Page } from '@/components/layout';
import { Button, Card, Modal, Text } from '@/components/common';
import { FilterFormWithContext, FilterTable, NewFilterModal } from '@/components/page-components';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { t } = useTranslation();

  return (
    <Page title="filters">
      <Container className="py-10">
        <Card>
          <div className="flex items-center justify-between pb-10">
            <Text size="2xl" as="h1" bold>
              {t('page.filters.heading')}
            </Text>
            <Button>{t('page.filters.button.new')}</Button>
          </div>
          <FilterTable />
          <Text as="h2" size="lg" bold>
            {t('form.filter.heading.new')}
          </Text>
          <FilterFormWithContext />
        </Card>
      </Container>
      <NewFilterModal />
    </Page>
  );
}
