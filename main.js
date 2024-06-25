import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 在DOM完全加载后添加Umami追踪代码
window.addEventListener('DOMContentLoaded', () => {
  window.umami = window.umami || [];
  // 替换'YOUR_TRACKING_ID'为你的Umami追踪ID
  umami('init', '171da167-6cc9-4558-8947-7cc2edd94436');
});

app.mount('#app')