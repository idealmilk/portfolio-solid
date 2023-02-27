import { HttpStatusCode } from 'solid-start/server';

import SEO from '~/components/SEO';

export default function NotFound() {
  return (
    <main>
      <SEO title='Page Not Found' />
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{' '}
        <a href='https://start.solidjs.com' target='_blank'>
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
