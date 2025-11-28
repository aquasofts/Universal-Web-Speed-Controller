import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '通用网页倍速控制器',
  description: '让网页视频和Unity游戏快人一步',

  // ------------------------------------------------
  // 核心修复点：必须显式指定 bundler
  // ------------------------------------------------
  bundler: viteBundler(),

  theme: defaultTheme({
    logo: 'https://tampermonkey.net/images/icon.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
            {
        text: '安装教程',
        link: '/guide/edge.md',
      },
      {
        text: '获取脚本',
        link: 'https://greasyfork.org/zh-CN/scripts/557217',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '安装教程',
          children: [
            '/guide/edge.md',
          ],
        },
      ],
    },
  }),
})