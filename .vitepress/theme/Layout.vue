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
          envId: 'https://starsharbor-twikoo.netlify.app/.netlify/functions/twikoo',
          el: '#twikoo',
        });
      }
    });
  }
}
</script>