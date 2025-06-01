import { createFileRoute } from '@tanstack/react-router';
import { Container, Page } from '@/components/layout';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <Page>
      <Container></Container>
    </Page>
  );
}
