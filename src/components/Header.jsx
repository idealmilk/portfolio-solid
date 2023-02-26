import { A } from 'solid-start';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <A href='/'>
          <button>Home</button>
        </A>
        <A href='/about'>
          <button>About</button>
        </A>
        <A href='/work'>
          <button>Work</button>
        </A>
      </nav>
    </header>
  );
}
