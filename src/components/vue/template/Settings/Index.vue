<template>
  <div class="config-card">
    <h3>插件相关设置</h3>
    <p>不喜欢的话就在这里修改吧。</p>

    <div class="list-card">
      <h3>关闭插件</h3>
      <p>
        不能完全关闭，比如默认就修改过的主题（写死了），但是一些由插件提供的功能可以直接关闭。同时关闭后也并不能加速页面的加载，这个谷歌背锅。<br>
        后续如果想要回来可以在Console中输入 <code>localStorage.setItem('disablePlugin', false)</code>
        刷新后即可重新启用。
      </p>
      <n-button round type="warning" @click="disablePlugin">确定关闭</n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { putLS } from '../../../ts/LocalStorage'

const disablePlugin = () => {
  putLS('enableCustomStyle', false);
  putLS('disablePlugin', true);
  location.reload();
}
</script>