import { createResource, For, Show } from 'solid-js';
import { Title } from 'solid-start';

import Projects from '~/components/Projects';
import { client } from '~/utils/client';

export default function Home() {
  const [projects] = createResource(() =>
    client
      .getEntries({
        content_type: 'project',
      })
      .then((entries) => {
        return entries;
      })
  );

  return (
    <main>
      <Title>Projects</Title>
      <h1>Projects</h1>

      <Show
        when={projects()?.items}
        fallback={() => <span className=''>'Loading'</span>}
      >
        {
          <Projects
            projects={projects()}
            fallback={<div>I am looking for it</div>}
          />
        }
      </Show>
    </main>
  );
}
