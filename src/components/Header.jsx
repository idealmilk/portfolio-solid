import { A } from 'solid-start';

import LanguageToggle from './LanguageToggle';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <A href='/' end>
          <button>Home</button>
        </A>
        <A href='/about' end>
          <button>About</button>
        </A>
        <A href='/work' end>
          <button>Work</button>
        </A>
      </nav>
      <div className={styles.toggleWrap}>
        <LanguageToggle />
      </div>
    </header>
  );
}
