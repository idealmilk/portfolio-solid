import { A } from 'solid-start';

import Button from '~/components/Button';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <A href='/'>
          <Button>Home</Button>
        </A>
        <A href='/about'>
          <Button>About</Button>
        </A>
        <A href='/work'>
          <Button>Work</Button>
        </A>
      </nav>
    </header>
  );
}
