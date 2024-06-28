import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "虚空终端使用文档",
  description: "在此查看并解决您在使用过程中遇到的问题",
  base: "/",
  head: [["link", { rel: "icon", href: "/img/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/logo.svg",

    nav: [
      { text: '主页', link: '/' },
      { text: '主人博客', link: 'https://blog.starsharbor.com/' }
    ],

    sidebar: [
      {
        text: '系统公告',
        items: [
          { text: '公告', link: '/announcement' },
        ]
      },
      {
        text: '频道机器人',
        items: [
          { text: '介绍', link: '/qq-guild-index' },
          { text: '使用须知', link: '/qq-guild-instructions' },
        ]
      },
      {
        text: '群聊机器人',
        items: [
          { text: '介绍', link: '/qq-group-index' },
          { text: '使用须知', link: '/qq-group-instructions' },
        ]
      },
      {
        text: '更多',
        items: [
          { text: '赞助', link: '/sponsor-our-project' },
          { text: '隐私政策', link:'/privacy-policy' },
        ]
      },
      {
        text: '群主、频道主签约',
        items: [
          { text: '群聊签约', link: '/group-signing' },
          { text: '频道签约', link: '/guild-signing' },
        ]
      },
    ],

    footer: {
      copyright: "©2024 ❖星港◎Star☆ 版权所有",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stars-harbor' }
    ]
  }
})
