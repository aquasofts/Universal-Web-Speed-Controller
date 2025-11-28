import comp from "E:/git/web-change-speed/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764330834000,\"contributors\":[{\"name\":\"aquasofts\",\"username\":\"aquasofts\",\"email\":\"aquasoft520@gmail.com\",\"commits\":1,\"url\":\"https://github.com/aquasofts\"}],\"changelog\":[{\"hash\":\"3de7656ba6724dee5fda3b5cb77f326f87249944\",\"time\":1764330834000,\"email\":\"aquasoft520@gmail.com\",\"author\":\"aquasofts\",\"message\":\"添加 GitHub Pages 部署配置\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
