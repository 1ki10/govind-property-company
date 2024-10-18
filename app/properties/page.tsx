"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';


const DynamicPropertiesContent = dynamic(() => import('./PropertiesContent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Uncaught error:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong. Please try refreshing the page.</h1>;
  }

  return <>{children}</>;
};

const PropertiesPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicPropertiesContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default PropertiesPage;