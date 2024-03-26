import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "虚空终端使用文档",
  description: "在此查看并解决您在使用过程中遇到的问题",
  base: "/",
  logo: "/img/logo.svg",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '主人博客', link: 'https://blog.starsharbor.com/' }
    ],

    sidebar: [
      {
        text: '频道机器人',
        items: [
          { text: '注意事项', link: '/waiting' },
        ]
      },
      {
        text: '群聊机器人',
        items: [
          { text: '注意事项', link: '/waiting' },
        ]
      }
    ],

    footer: {
      copyright: "Starsharbor",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stars-harbor' }
    ]
  }
})
