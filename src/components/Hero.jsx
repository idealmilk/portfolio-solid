import { A } from 'solid-start';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div class={styles.hero}>
      <div class={styles.heroWrap}>
        <h1>This portfolio is eco-friendly</h1>
        <div class={styles.heroButtonWrap}>
          <A href='/about'>
            <button>FInd out more</button>
          </A>
          <A href='/work'>
            <button>See my work</button>
          </A>
        </div>
      </div>
    </div>
  );
}
