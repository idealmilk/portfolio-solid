import { mergeProps } from 'solid-js';

import styles from './Carbon.module.css';

export default function Carbon(props) {
  const merged = mergeProps({ grams: [] }, props);
  return (
    <div class={styles.carbonContainer}>
      CO2 Used: ~{parseFloat(merged.grams.toFixed(2))}
    </div>
  );
}
