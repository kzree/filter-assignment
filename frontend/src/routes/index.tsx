import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Card, Text } from '@/components/common';
import { Container, Page } from '@/components/layout';
import { FilterFormWithContext, FilterTable, NewFilterModal } from '@/components/page-components';
import { useAppStore } from '@/store';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();
  const { setIsFormModalOpen, formVisualType, setFormVisualType } = useAppStore();

  useEffect(() => {
    if (formVisualType === 'modal') {
      setShowForm(false);
    }
  }, [formVisualType]);

  const handleCreateNewButton = () => {
    if (formVisualType === 'modal') {
      setIsFormModalOpen(true);
    } else {
      setShowForm(true);
    }
  };

  const handleToggleFormVisualType = () => {
    setFormVisualType(formVisualType === 'modal' ? 'page' : 'modal');
  };

  return (
    <Page title="filters">
      <Container className="py-10">
        <Card>
          <div className="flex items-center justify-between pb-10">
            <Text size="2xl" as="h1" bold>
              {t('page.filters.heading')}
            </Text>
            <div className="flex gap-2">
              <Button onClick={handleToggleFormVisualType}>
                {t('page.filters.button.toggle')}
              </Button>
              <Button onClick={handleCreateNewButton}>{t('page.filters.button.new')}</Button>
            </div>
          </div>
          <FilterTable />
          {showForm && (
            <>
              <Text as="h2" size="lg" bold className="mt-24">
                {t('form.filter.heading.new')}
              </Text>
              <FilterFormWithContext />
            </>
          )}
        </Card>
      </Container>
      <NewFilterModal />
    </Page>
  );
}
