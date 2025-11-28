import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // -------------------------------------------------------------------------
  // 🚨 核心修复：Base 路径设置 🚨
  // 必须设置为 '/仓库名/'。
  // 根据您的报错日志，您的仓库名是 Universal-Web-Speed-Controller
  // -------------------------------------------------------------------------
  base: '/Universal-Web-Speed-Controller/',

  lang: 'zh-CN',
  title: '通用网页倍速控制器',
  description: '重新定义您的网页浏览与游戏节奏',

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: 'https://tampermonkey.net/images/icon.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '快速开始',
        link: '/guide/edge',
      },
      {
        text: '源码与下载',
        link: 'https://greasyfork.org/zh-CN/scripts/557217',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '部署指南',
          children: [
            '/guide/edge.md',
          ],
        },
      ],
    },
  }),
})