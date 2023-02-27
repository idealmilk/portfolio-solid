import { For } from 'solid-js';
import { A } from 'solid-start';

import { Projects } from '~/data/Projects';

import styles from './Work.module.css';

export default function Work(props) {
  return (
    <div class={styles.works}>
      <ul>
        <For each={Projects}>
          {(project, i) => {
            return (
              <li>
                <A href={`/work/${project.slug}`}>
                  <img src={project.homeImage} alt={project.clientName} />
                  <p>{project.clientName}</p>
                </A>
              </li>
            );
          }}
        </For>
      </ul>
      <p class={styles.disclaimer}>
        Older projects in this portfolio have not been built using the same
        eco-friendly practices outlined on this website.
      </p>
    </div>
  );
}
