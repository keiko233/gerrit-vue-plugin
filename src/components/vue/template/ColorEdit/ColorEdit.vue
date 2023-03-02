<template>
  <div class="config-card">
    <n-space vertical>
      <n-space justify="space-between" align="center">
        <p>Enable Custom Style</p>
        <n-switch v-model:value="enableCustomStyle" @update:value="switchCustomStyle" />
      </n-space>
      <n-color-picker placement="top-start" v-model:value="customColorValue" :modes="['hex']" :show-alpha="false"
        :actions="['confirm']" @confirm="updateCustomColor" />

      <div class="config-color-card">
        <p>Color preview</p>
        <div class="config-color-perview" style="background-color: var(--theme-primary);">
          theme-primary
        </div>
        <div class="config-color-perview" style="background-color: var(--theme-primary-notransparency);">
          theme-primary-notransparency
        </div>
        <div class="config-color-perview" style="box-shadow: var(--theme-primary-shadow);">
          theme-primary-shadow
        </div>
        <div class="config-color-perview" style="text-shadow: var(--theme-primary-font-shadow);">
          theme-primary-font-shadow
        </div>
      </div>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { removeStyleById } from '../../../ts/StyleInsert'
import { putLS } from '../../../ts/LocalStorage'
import { enableCustomStyle, customColorValue, setCustomColor } from './ColorEditScript'

const switchCustomStyle = (value: boolean) => {
  putLS('enableCustomStyle', value);
  if (value) {
    setCustomColor(customColorValue.value);
  } else {
    removeStyleById('custom-color');
  }
}

const updateCustomColor = (value: string) => {
  if (enableCustomStyle.value) {
    putLS('customColorValue', value);
    removeStyleById('custom-color');
    setCustomColor(value);
  }
}
</script>

<style lang="less" scoped>
.config-color-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    width: 100%;
  }

  .config-color-perview {
    color: #fff;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: var(--theme-border-radius);
    background-color: var(--background-overlay);
  }
}
</style>