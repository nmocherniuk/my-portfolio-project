import React, { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

const Header = lazy(() => import('../components/Header/Header'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));

function RootLayout() {
  const location = useLocation();
  const overlay = useSelector((state) => state.navigation.isOpen);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <AnimatePresence>
        {overlay && (
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
          </Suspense>
        )}
      </AnimatePresence>
      <main>
        <AnimatePresence initial={true} mode='wait'>
          <Outlet location={location} />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default RootLayout;
