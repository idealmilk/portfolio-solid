// @refresh reload
import { Suspense, createSignal, createEffect } from 'solid-js';
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

import Carbon from './components/Carbon';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

import './root.css';

export const [isEnglish, setIsEnglish] = createSignal(true, { equals: false });
export const [carbonIntensity, setCarbonIntensity] = createSignal([]);
export const [carbonUsage, setCarbonUsage] = createSignal([]);

export default function Root() {
  const location = useLocation();

  createEffect(async () => {
    const now = new Date();

    const eightHoursAhead = new Date(
      new Date().setTime(now.getTime() + 16 * 60 * 60 * 1000)
    );

    const carbonIntensityResponse = await fetch(
      `https://api.carbonintensity.org.uk/regional/intensity/${now.toISOString()}/${eightHoursAhead.toISOString()}/regionid/13`
    );
    const carbonIntensityData = await carbonIntensityResponse.json();

    const carbonUsageResponse = await fetch(
      `https://api.websitecarbon.com/site?url=https://trv608.netlify.app/`,
      {
        mode: 'cors',
      }
    );
    const carbonUsageData = await carbonUsageResponse.json();

    setCarbonIntensity(carbonIntensityData.data.data[0].intensity);
    setCarbonUsage(
      parseFloat(carbonUsageData.statistics.co2.grid.grams.toFixed(3))
    );
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
            <Carbon />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
