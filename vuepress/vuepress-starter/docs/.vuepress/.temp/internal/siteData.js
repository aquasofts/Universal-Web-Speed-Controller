export const siteData = JSON.parse("{\"base\":\"/Universal-Web-Speed-Controller/\",\"lang\":\"zh-CN\",\"title\":\"通用网页倍速控制器\",\"description\":\"重新定义您的网页浏览与游戏节奏\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
