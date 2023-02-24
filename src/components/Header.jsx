import { A } from 'solid-start';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div class={styles.header}>
      <A href='/'>Eco Solid</A>

      <nav class={styles.nav}>
        <A href='/about'>About</A>
        <A href='/projects'>Projects</A>
        <A href='/research-log'>Research Log</A>
        <A href='/contact'>Contact</A>
      </nav>
    </div>
  );
}
