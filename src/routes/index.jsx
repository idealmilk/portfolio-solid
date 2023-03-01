import { createSignal, createResource, createEffect } from 'solid-js';
import { Title } from 'solid-start';

import Carbon from '~/components/Carbon';
import Hero from '~/components/Hero';
import SEO from '~/components/SEO';

export default function Home() {
  return (
    <main>
      <SEO />
      <Hero />
    </main>
  );
}
