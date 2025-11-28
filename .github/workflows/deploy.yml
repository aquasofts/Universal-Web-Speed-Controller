name: Deploy VuePress Site

on:
  # 在推送到 main 分支时触发
  push:
    branches:
      - main
      - master # 兼容 master 分支

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 允许一个并发部署
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    
    # -----------------------------------------------------------------------
    # 核心修复：设置默认工作目录
    # 因为您的项目在子文件夹中，必须告诉 Action 在哪里运行命令
    # -----------------------------------------------------------------------
    defaults:
      run:
        working-directory: vuepress/vuepress-starter

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          # 修复 SyntaxError: Invalid regular expression flags
          # 升级到 Node 20 以支持正则 'v' 标志
          node-version: 20
          cache: npm
          # 修复 Setup Node 报错：明确指定 lock 文件位置
          cache-dependency-path: vuepress/vuepress-starter/package-lock.json

      - name: Install Dependencies
        # 使用 npm install 代替 npm ci，兼容性更好（防止 lock 文件版本不一致报错）
        run: npm install

      # -----------------------------------------------------------------------
      # 新增修复：强制赋予二进制文件执行权限
      # 解决 'vuepress: Permission denied' 错误
      # -----------------------------------------------------------------------
      - name: Fix Permissions
        run: chmod -R +x node_modules/.bin

      - name: Build
        run: npm run docs:build

      # -----------------------------------------------------------------------
      # 样式崩坏修复：创建 .nojekyll 文件
      # 告诉 GitHub Pages 不要忽略 _assets 文件夹 (VuePress 的默认静态资源目录)
      # -----------------------------------------------------------------------
      - name: Create .nojekyll
        run: touch docs/.vuepress/dist/.nojekyll

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # 修复打包路径：指向子目录下的 dist
          path: vuepress/vuepress-starter/docs/.vuepress/dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4