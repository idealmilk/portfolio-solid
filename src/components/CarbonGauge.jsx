import { createSignal, createEffect } from 'solid-js';

import { carbonIntensity, setCarbonIntensity } from '~/root';

import styles from './CarbonGauge.module.css';

export default function CarbonGauge() {
  const [angle, setAngle] = createSignal(-135);

  const getAngle = (value) => {
    switch (value) {
      case 'very low':
        return 18;
      case 'low':
        return 54;
      case 'modrate':
        return 90;
      case 'high':
        return 126;
      case 'very high':
        return 162;
      default:
        return 0;
    }
  };

  createEffect(() => {
    if (carbonIntensity().index) {
      const newAngle = getAngle(carbonIntensity().index);
      setAngle(newAngle);
      console.log(angle());
    }
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.gauge}>
        <div class={styles.bar} />
        <div class={styles.circle} />
        <div
          class={styles.arrow}
          style={{
            transform: `rotate(${angle()}deg) translate(-7.5rem, 3.5rem)`,
            // transform: `rotate(5deg) translate(-7.5rem, 3.5rem)`,
          }}
        />
        <div class={styles.tickers}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
