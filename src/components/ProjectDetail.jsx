import { mergeProps } from 'solid-js';

import styles from './ProjectDetail.module.css';

export default function ProjectDetail(props) {
  const merged = mergeProps({ data: {} }, props);

  return (
    <div class={styles.projectDetailContainer}>
      <h1>{merged.data.clientName}</h1>
      <div class={styles.projectDetailWrap}>
        <div class={styles.projectDetailInfo}>
          <table>
            <tbody>
              <tr>
                <td class={styles.projectDetailKey}>
                  <p>Category</p>
                </td>
                <td>
                  <ul>
                    <For each={merged.data.category}>
                      {(category, i) => <li key={i}>{category}</li>}
                    </For>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class={styles.projectDetailKey}>
                  <p>Year</p>
                </td>
                <td>
                  <p>{merged.data.year}</p>
                </td>
              </tr>
              {merged.data.team && (
                <tr>
                  <td class={styles.projectDetailKey}>
                    <p>Team</p>
                  </td>
                  <td>
                    <ul>
                      <For each={merged.data.team}>
                        {(member, i) => <li key={i}>{member}</li>}
                      </For>
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div class={styles.projectDetailDesc}>
          <p>{merged.data.desc}</p>
        </div>
      </div>
    </div>
  );
}
