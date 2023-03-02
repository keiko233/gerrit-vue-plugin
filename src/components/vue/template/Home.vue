<template>
  <div class="config-card">
    <h3>欢迎食用 Gerrit Vue Plugin</h3>
    <p>点击上方导航栏即可切换功能。</p>
    <p>我很懒，所以这个插件现阶段没多语言支持，兼容性也比较堪忧，UI也有点丑，而且还是针对性开发的，里面应该可能有实用的功能。</p>

    <div class="list-card">
      <h3>GitHub</h3>
      <p>欢迎来点个星星， {{ github_url }}</p>
      <n-button round @click="openUrl(github_url)">
        GitHub
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </template>
      </n-button>
    </div>

    <div class="list-card">
      <h3>Package 信息</h3>
      <n-switch v-model:value="showPackageInfo" />
      
      <div v-if="showPackageInfo == true">
        <p>name: {{ packageJson.name }}</p>
        <p>version: {{ packageJson.version }}</p>
        <p>dependencies: {{ packageJson.dependencies }}</p>
        <p>devDependencies: {{ packageJson.devDependencies }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import packageJson from '../../../../package.json'

const github_url = "https://github.com/keiko233/gerrit-vue-plugin"
const showPackageInfo = ref(false)

const openUrl = (url: string) => {
  window.open(url, '_blank');
}
</script>

<style lang="less" scoped>
.config-card {
  p {
    padding: 0 0 4px 0;
  }

  .list-card {
    padding: 16px 0;
  }
}
</style>