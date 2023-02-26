import { createSignal, createResource, createEffect } from 'solid-js';
import { Title } from 'solid-start';

import Carbon from '~/components/Carbon';
import Hero from '~/components/Hero';

const fetchCarbonData = async (url) =>
  (
    await fetch(`https://api.websitecarbon.com/site?url=${url}`, {
      mode: 'cors',
    })
  ).json();

export default function Home() {
  // const [slug, setSlug] = createSignal();
  // const [carbonData] = createResource(slug, fetchCarbonData);

  // createEffect(() => {
  //   setSlug('https://www.wanikani.com/');
  // });

  return (
    <main>
      <Title>Hello World</Title>
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
