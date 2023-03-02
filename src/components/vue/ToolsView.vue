<template>
  <div class="tools-overlay">
    <n-modal v-model:show="showModal">
      <n-card content-style="padding: 0;" class="overlay-card">
        <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
          <n-tab-pane name="PARKLIFE">
            PARKLIFE
          </n-tab-pane>
          <n-tab-pane name="ROCKLIFE">
            ROCKLIFE
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-modal>

    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button tertiary circle color="#ff1958" @click="click">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>tooltip</title>
              <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z" />
            </svg>
          </template>
        </n-button>
      </template>
      Click to open menu.
    </n-tooltip>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false);

const click = () => {
  showModal.value = !showModal.value;
  console.log(showModal.value);
}
</script>

<style lang="less" scoped>
.tools-overlay {
  position: absolute;
  top: 0;
  height: 128px;
  width: 128px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: calc(92% - 129px) calc(100% - 128px);
}

.overlay-card {
  width: 600px;
}
</style>