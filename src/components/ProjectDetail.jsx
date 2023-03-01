import { mergeProps } from 'solid-js';

import styles from './ProjectDetail.module.css';

import { isEnglish, setIsEnglish } from '~/root';

export default function ProjectDetail(props) {
  const merged = mergeProps({ data: {} }, props);

  return (
    <div class={styles.projectDetailContainer}>
      <div class={styles.projectDetailTitle}>
        <h1>{merged.data.clientName}</h1>
        <a href={merged.data.url} target='_blank' rel='noopener noreferrer'>
          <Show when={isEnglish()} fallback={<button>サイト訪問</button>}>
            <button>Visit Site</button>
          </Show>
        </a>
      </div>
      <div class={styles.projectDetailWrap}>
        <div class={styles.projectDetailInfo}>
          <table>
            <tbody>
              <tr>
                <td class={styles.projectDetailKey}>
                  <Show when={isEnglish()} fallback={<p>カテゴリー</p>}>
                    <p>Category</p>
                  </Show>
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
                  <Show when={isEnglish()} fallback={<p>年</p>}>
                    <p>Year</p>
                  </Show>
                </td>
                <td>
                  <p>{merged.data.year}</p>
                </td>
              </tr>
              {merged.data.team && (
                <tr>
                  <td class={styles.projectDetailKey}>
                    <Show when={isEnglish()} fallback={<p>チーム</p>}>
                      <p>Team</p>
                    </Show>
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
