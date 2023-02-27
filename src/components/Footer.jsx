import { A } from 'solid-start';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <p>Connect with me</p>
      <div class={styles.iconWrap}>
        <a
          href='https://www.linkedin.com/in/matthew-gilligan-dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src='/icons/linkedin.svg' alt='LinkedIn' />
          </button>
        </a>
        <a
          href='mailto: mcgilligan@proton.me'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src='/icons/mail.svg' alt='' />
          </button>
        </a>
      </div>
    </footer>
  );
}
