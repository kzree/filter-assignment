import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Container, Page } from '@/components/layout';
import { Card } from '@/components/common';
import { FilterFormWithContext } from '@/components/page-components/filter-form';
import { Text } from '@/components/common/text';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { t } = useTranslation();
  return (
    <Page>
      <Container className="py-10">
        <Card>
          <Text size="2xl" as="h1" bold>
            {t('page.filters.title')}
          </Text>
          <FilterFormWithContext />
        </Card>
      </Container>
    </Page>
  );
}
