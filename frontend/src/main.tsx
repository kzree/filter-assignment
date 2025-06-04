import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx';

import { routeTree } from './routeTree.gen';

import './styles.css';
import reportWebVitals from './reportWebVitals.ts';
import './integrations/i18n/i18n.ts';
import { AppErrorBoundary } from './components/common/error-boundary.tsx';

const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProvider.getContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppErrorBoundary>
        <TanStackQueryProvider.Provider>
          <RouterProvider router={router} />
        </TanStackQueryProvider.Provider>
      </AppErrorBoundary>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
