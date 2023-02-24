import { createResource, For, Show } from 'solid-js';
import { useParams } from 'solid-start';
import { Title } from 'solid-start';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Blog from '~/components/Blog';
import RichText from '~/components/RichText';
import { client } from '~/utils/client';

export default function Home() {
  const params = useParams();

  const [post] = createResource(() =>
    client
      .getEntries({ 'fields.slug[in]': params.slug, content_type: 'blogPost' })
      .then((entries) => {
        const rawRichTextField = entries.items[0].fields.body;
        const renderedHtml = documentToHtmlString(rawRichTextField);
        document.getElementById('rich-text-body').innerHTML = renderedHtml;

        return entries;
      })
  );

  return (
    <main>
      <Show
        when={post()?.items}
        fallback={() => <span className=''>'Loading'</span>}
      >
        <>
          <Title>Working!</Title>
          <h1>{post().items[0].fields.title}</h1>
          <div id='rich-text-body'></div>
        </>
      </Show>
    </main>
  );
}
