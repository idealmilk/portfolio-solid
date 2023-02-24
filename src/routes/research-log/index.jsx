import { createResource, For, Show } from 'solid-js';
import { Title } from 'solid-start';

import Blog from '~/components/Blog';
import { client } from '~/utils/client';

export default function Home() {
  const [blogPosts] = createResource(() =>
    client
      .getEntries({
        content_type: 'blogPost',
      })
      .then((entries) => {
        return entries;
      })
  );

  return (
    <main>
      <Title>Research Log</Title>
      <h1>Research Log</h1>

      <Show
        when={blogPosts()?.items}
        fallback={() => <span className=''>'Loading'</span>}
      >
        {
          <Blog
            blogPosts={blogPosts()}
            fallback={<div>I am looking for it</div>}
          />
        }
      </Show>
    </main>
  );
}
