<template>
  <div class="tools-overlay" v-if="disablePlugin == false">
    <n-modal v-model:show="showModal">
      <n-card content-style="padding: 0;" class="overlay-card">
        <n-tabs type="line" size="large" :tabs-padding="20" animated pane-style="padding: 0;">
          <n-tab-pane name="Home Page">
            <Home />
          </n-tab-pane>
          <n-tab-pane name="Optimizations">
            <Optimizations />
          </n-tab-pane>
          <n-tab-pane name="Color Editor">
            <ColorEdit />
          </n-tab-pane>
          <n-tab-pane name="Plugin Settings">
            <Settings />
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-modal>

    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button size="large" tertiary circle @click="click">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>tooltip</title>
              <path style="fill: var(--theme-primary-notransparency)"
                d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" />
            </svg>
          </template>
        </n-button>
      </template>
      Click to show menu.
    </n-tooltip>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initLS } from '../ts/LocalStorage'
import Optimizations from './template/Optimizations/Optimizations.vue'
import { enableThemeSidebarLinks, insertSidebarLinksStyle } from './template/Optimizations/OptimizationsScript'
import ColorEdit from './template/ColorEdit/ColorEdit.vue'
import { enableCustomStyle, customColorValue, setCustomColor } from './template/ColorEdit/ColorEditScript'
import Home from './template/Home.vue'
import Settings from './template/Settings/Settings.vue'

const disablePlugin = ref(initLS('disablePlugin', false));
const showModal = ref(false);

const click = () => {
  showModal.value = !showModal.value;
}

onMounted(() => {
  if (enableCustomStyle.value == true) {
    setCustomColor(customColorValue.value);
  }
  if (enableThemeSidebarLinks.value == true) {
    insertSidebarLinksStyle();
  }
})
</script>

<style lang="less" scoped>
.tools-overlay {
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 48px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay-card {
  position: fixed;
  left: 0;
  right: 0;
  top: 10vh;
  max-width: 480px;
  border-radius: var(--theme-border-radius);
}
</style>