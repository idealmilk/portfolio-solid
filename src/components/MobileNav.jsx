import { createSignal, createEffect } from 'solid-js';
import { A } from 'solid-start';

import Footer from './Footer';
import LanguageToggle from './LanguageToggle';

import styles from './MobileNav.module.css';

export default function MobileNav() {
  const [isActive, setIsActive] = createSignal(false);

  const toggleActive = () => setIsActive(!isActive());

  createEffect(() => {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = isActive();
  });

  return (
    <nav role='navigation'>
      <div class={styles.menuToggle}>
        <input id='checkbox' type='checkbox' onClick={toggleActive} />

        <span></span>
        <span></span>
        <span></span>

        <ul>
          <li>
            <A href='/' onClick={toggleActive} end>
              Home
            </A>
          </li>
          <li>
            <A href='/about' onClick={toggleActive} end>
              About
            </A>
          </li>
          <li>
            <A href='/work' onClick={toggleActive} end>
              Work
            </A>
          </li>

          <div
            style='
    text-align: center;
    margin-top: 4rem;'
          >
            <LanguageToggle />
          </div>
          <Footer />
        </ul>
      </div>
    </nav>
  );
}
