import { For, mergeProps } from 'solid-js';
import { A } from 'solid-start';

export default function Projects(props) {
  const merged = mergeProps({ projects: [] }, props);

  return (
    <ul>
      <For each={merged.projects}>
        {(project, i) => {
          return (
            <li>
              <A href={`/work/${project.slug}`}>{project.clientName}</A>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
