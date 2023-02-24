import { mergeProps } from 'solid-js';

export default function Carbon(props) {
  const merged = mergeProps({ grams: [] }, props);
  return <div>CO2 Used: ~{parseFloat(merged.grams.toFixed(2))}</div>;
}
