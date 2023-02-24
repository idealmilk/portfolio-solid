import { For, mergeProps } from 'solid-js';
import { A } from 'solid-start';

export default function Projects(props) {
  const merged = mergeProps({ blogPosts: [] }, props);

  return (
    <ul>
      <For each={merged.blogPosts.items}>
        {(blogPost, i) => {
          return (
            <li>
              <A href={`/research-log/${blogPost.fields.slug}`}>
                {blogPost.fields.title}
              </A>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
