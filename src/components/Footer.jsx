import { A } from 'solid-start';

import { isEnglish, setIsEnglish } from '~/root';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <Show when={isEnglish()} fallback={<p>僕とつながる</p>}>
        <p>Connect with me</p>
      </Show>

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
