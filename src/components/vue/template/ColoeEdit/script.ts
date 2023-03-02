import { insertStyleById } from '../../../ts/StyleInsert'
import { getLightColor, getDarkColor } from '../../../ts/ColorMapping'
import { initLS } from '../../../ts/LocalStorage'
import { ref } from 'vue'

export const enableCustomStyle = ref(initLS('enableCustomStyle', false));
export const customColorValue = ref(initLS('customColorValue', '#FF1958'));

export function setCustomColor(value: string) {
  const style = `:root {
    --theme-primary: ${value}A3;
    --theme-primary-notransparency: ${getLightColor(value, 0.2)};
    --theme-primary-shadow: 0 0 3px ${getDarkColor(getLightColor(value, 0.8), 0.2)};
    --theme-primary-font-shadow: 0 0 1px ${getDarkColor(getLightColor(value, 0.1), 0.1)};
  }`;
  insertStyleById('custom-color', style);
}