<!-- .vitepress/theme/Layout.vue -->
<template>
  <div>
    <Content />
    <div id="twikoo" style="margin-top: 2em;"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      if (typeof twikoo !== 'undefined') {
        twikoo.init({
          envId: 'https://starsharbor-twikoo.netlify.app/.netlify/functions/twikoo',  // 请替换成你的 Twikoo 环境 ID
          el: '#twikoo',
        });
      }
    });
  }
}
</script>

<style>
/* 你可以在这里添加一些自定义样式 */
</style>