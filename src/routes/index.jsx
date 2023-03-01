import { createSignal, createResource, createEffect } from 'solid-js';
import { Title } from 'solid-start';

import Carbon from '~/components/Carbon';
import Hero from '~/components/Hero';
import SEO from '~/components/SEO';

export default function Home() {
  return (
    <main>
      <SEO />
      {/* <Show
        when={carbonData()}
        fallback={() => <span className=''>'Loading'</span>}
      >
        {
          <Carbon
            grams={carbonData().statistics.co2.grid.grams}
            fallback={<div>I am looking for it</div>}
          />
        }
      </Show> */}
      <Hero />
    </main>
  );
}
