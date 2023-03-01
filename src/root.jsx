// @refresh reload
import { Suspense, createSignal, onMount, createEffect } from 'solid-js';
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

export const [isEnglish, setIsEnglish] = createSignal(true, { equals: false });
export const [carbonIntensity, setCarbonIntensity] = createSignal([]);

export default function Root() {
  const location = useLocation();

  onMount(async () => {
    const now = new Date();

    const eightHoursAhead = new Date(
      new Date().setTime(now.getTime() + 16 * 60 * 60 * 1000)
    );

    const response = await fetch(
      `https://api.carbonintensity.org.uk/regional/intensity/${now.toISOString()}/${eightHoursAhead.toISOString()}/regionid/13`
    );
    const data = await response.json();

    setCarbonIntensity(data.data.data[0].intensity);
  });

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
