import { mergeProps } from 'solid-js';

import { carbonIntensity, setCarbonIntensity } from '~/root';
import { carbonUsage, setCarbonUsage } from '~/root';
import { isEnglish, setIsEnglish } from '~/root';

import CarbonGauge from './CarbonGauge';
import styles from './Carbon.module.css';

export default function Carbon(props) {
  const indexTranslations = {
    'very low': '非常に低い',
    low: '低い',
    moderate: '中程度',
    high: '高い',
    'very high': '非常に高い',
  };

  return (
    <>
      <div class={styles.intensityContainer}>
        <CarbonGauge />

        <Show
          when={isEnglish()}
          fallback={
            <button>
              炭素集約度: {indexTranslations[carbonIntensity().index]}
            </button>
          }
        >
          <button>Carbon Intensity: {carbonIntensity().index}</button>
        </Show>
      </div>
      <div class={styles.usageContainer}>
        <Show
          when={isEnglish()}
          fallback={<button>使用したCO2: ~{carbonUsage()}</button>}
        >
          <button>CO2 Used: ~{carbonUsage()}</button>
        </Show>
      </div>
    </>
  );
}

{
  /* <p>Carbon Intensity: {carbonIntensity().index}</p>
        <p>Carbon Forecast: {carbonIntensity().forecast}g CO2/kWh</p> */
}
