import { A } from 'solid-start';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.footerwrap}>
        <a
          href='https://www.linkedin.com/in/matthew-gilligan-dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>L</button>
        </a>
        <a
          href='mailto: mcgilligan@proton.me'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>E</button>
        </a>
      </div>
    </footer>
  );
}
