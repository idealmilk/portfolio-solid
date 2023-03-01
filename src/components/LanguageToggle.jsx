import { A } from 'solid-start';

import { isEnglish, setIsEnglish } from '~/root';

import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  return (
    <button
      onClick={() => setIsEnglish(!isEnglish())}
      class={styles.languageToggle}
    >
      <p class={styles.english}>EN</p>
      <p class={styles.japanese}>JP</p>
      <span class={isEnglish() ? styles.switchOn : styles.switchOff} />
    </button>
  );
}
