import { createSignal, createEffect } from 'solid-js';
import { A } from 'solid-start';

import Footer from './Footer';
import LanguageToggle from './LanguageToggle';

import styles from './MobileNav.module.css';

export default function MobileNav() {
  const [isActive, setIsActive] = createSignal(false);

  const toggleNavigation = () => setIsActive(!isActive());

  return (
    <>
      <button
        class={`${styles.toggle} ${isActive() ? styles.active : ''}`}
        onClick={toggleNavigation}
      >
        <span />
        <span />
        <span />
      </button>
      <nav class={`${styles.navigation} ${isActive() ? styles.active : ''}`}>
        <ul>
          <li>
            <A href='/' onClick={toggleNavigation} end>
              Home
            </A>
          </li>
          <li>
            <A href='/about' onClick={toggleNavigation} end>
              About
            </A>
          </li>
          <li>
            <A href='/work' onClick={toggleNavigation} end>
              Work
            </A>
          </li>
        </ul>

        <div
          style='
    text-align: center;
    margin-top: 4rem;'
        >
          <LanguageToggle />
        </div>
        <Footer />
      </nav>
    </>
    //       <LanguageToggle />
    //     </div>
    //     <Footer />
    //   </div>
    // </nav>
  );
}
