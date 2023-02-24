import { For, mergeProps } from 'solid-js';

export default function Projects(props) {
  const merged = mergeProps({ projects: [] }, props);

  return (
    <ul>
      <For each={merged.projects.items}>
        {(project, i) => (
          <li>
            <p>{project.fields.clientName}</p>
          </li>
        )}
      </For>
    </ul>
  );
}
