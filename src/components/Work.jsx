import { For, mergeProps } from 'solid-js';
import { A } from 'solid-start';

import styles from './Work.module.css';

export default function Projects(props) {
  const merged = mergeProps({ projects: [] }, props);

  return (
    <ul class={styles.work}>
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
