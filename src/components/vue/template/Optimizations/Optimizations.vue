<template>
  <div class="config-card">
    <h3>布局优化</h3>
    <p>我不保证开启后会比原版好多少，但起码不会比原版恶心操作。</p>

    <div class="list-card">
      <h3>顶部导航栏 links 改为侧边栏</h3>
      <p>
        不一定好用，但是肯定看上去舒服些。开启后点击顶部菜单即可打开侧边栏。<br>
        关闭后将会自动刷新网页。
      </p>
      <n-switch v-model:value="enableThemeSidebarLinks" @update:value="enableThemeSidebarLinksButton" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { putLS } from '../../../ts/LocalStorage'
import { 
  enableThemeSidebarLinks, 
  insertSidebarLinksStyle
} from './OptimizationsScript'

const enableThemeSidebarLinksButton = (value: boolean) => {
  putLS('enableThemeSidebarLinks', value);
  if (value) {
    insertSidebarLinksStyle();
  } else {
    location.reload();
  }
}
</script>