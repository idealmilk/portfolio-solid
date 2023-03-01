import { A } from 'solid-start';
import { Show } from 'solid-js';

import { isEnglish, setIsEnglish } from '~/root';

import styles from './Hero.module.css';

const indexTranslations = {
  'very low': '非常に低い',
  low: '低い',
  moderate: '中程度',
  high: '高い',
  'very high': '非常に高い',
};

export default function Hero() {
  return (
    <div class={styles.hero}>
      <div class={styles.heroWrap}>
        <Show
          when={isEnglish()}
          fallback={<h1>このポートフォリオは、環境にやさしい</h1>}
        >
          <h1>This portfolio is eco-friendly</h1>
        </Show>
        <div class={styles.heroButtonWrap}>
          <A href='/about'>
            <Show when={isEnglish()} fallback={<button>もっと見る</button>}>
              <button>Find out more</button>
            </Show>
          </A>
          <A href='/work'>
            <Show when={isEnglish()} fallback={<button>作品を見る</button>}>
              <button>See my work</button>
            </Show>
          </A>
        </div>
      </div>
    </div>
  );
}
