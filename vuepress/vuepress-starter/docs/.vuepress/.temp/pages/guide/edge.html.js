import comp from "E:/git/web-change-speed/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/guide/edge.html.vue"
const data = JSON.parse("{\"path\":\"/guide/edge.html\",\"title\":\"Edge 浏览器安装指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/edge.md\"}")
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
