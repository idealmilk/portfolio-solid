import { children } from 'solid-js';

import styles from './Button.module.css';

export default function Button(props) {
  const c = children(() => props.children);

  return <div class={styles.button}>{c()}</div>;
}
