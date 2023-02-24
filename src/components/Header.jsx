import { A } from 'solid-start';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <A href='/'>Home</A>
        <A href='/about'>About</A>
        <A href='/work'>Work</A>
      </nav>
    </header>
  );
}
