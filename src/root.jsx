// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import { useLocation } from '@solidjs/router';

import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

import './root.css';

export default function Root() {
  const location = useLocation();

  return (
    <Html lang='en'>
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Header />
            <MobileNav />
            <Routes>
              <FileRoutes />
            </Routes>
            {location.pathname !== '/' && <Footer />}
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
