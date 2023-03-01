import { mergeProps } from 'solid-js';

import { carbonUsage, setCarbonUsage } from '~/root';

import styles from './Carbon.module.css';

export default function Carbon(props) {
  console.log(typeof carbonUsage());
  return (
    <div class={styles.carbonContainer}>
      <button>CO2 Used: ~{carbonUsage()}</button>
    </div>
  );
}
