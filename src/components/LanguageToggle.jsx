import { A } from 'solid-start';

import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  return (
    <div class={styles.switch}>
      <input
        id='language-toggle'
        class={`${styles.checkToggle} ${styles.checkToggleRoundFlat}`}
        type='checkbox'
      />
      <label for='language-toggle'></label>
      <span class={styles.switchOn}>EN</span>
      <span class={styles.switchOff}>JP</span>
    </div>
  );
}
