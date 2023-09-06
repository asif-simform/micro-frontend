import * as React from 'react';
import ErrorBoundary from "./components/ErrorBoundry";
// @ts-ignore
const App1 = React.lazy(() => import("app1/App"));
// @ts-ignore
const App2 = React.lazy(() => import("app2/App"));

interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <ErrorBoundary appName="App 1">
      <React.Suspense fallback="Loading App1">
        <App1 />
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary appName="App 2">
      <React.Suspense fallback="Loading App2">
        <App2 />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;