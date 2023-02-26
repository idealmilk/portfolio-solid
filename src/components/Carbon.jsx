import { mergeProps } from 'solid-js';

import Button from '~/components/Button';

import styles from './Carbon.module.css';

export default function Carbon(props) {
  const merged = mergeProps({ grams: [] }, props);
  return (
    <div class={styles.carbonContainer}>
      <Button>CO2 Used: ~{parseFloat(merged.grams.toFixed(2))}</Button>
    </div>
  );
}
