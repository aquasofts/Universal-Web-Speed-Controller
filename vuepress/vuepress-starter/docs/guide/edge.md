# Edge 浏览器安装指南

本教程将引导您在 Microsoft Edge 浏览器上安装“通用网页倍速控制器”脚本。整个过程完全免费，只需要 2 分钟。

## 第一步：安装篡改猴 (Tampermonkey) 扩展

脚本管理器是运行脚本的基础环境。Edge 浏览器基于 Chromium 内核，拥有非常完善的扩展支持。

1. 打开 Microsoft Edge 浏览器。

2. 点击下方链接进入 **Microsoft Edge 加载项商店**：
   - [篡改猴 - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/篡改猴/iikmkjmpaadaobahmlepeloendndfphd)

3. 在页面右侧点击蓝色的 **“获取 (Get)”** 按钮。

4. 浏览器上方会弹出一个提示框，点击 **“添加扩展 (Add extension)”**。

   ![1](E:\git\web-change-speed\vuepress\vuepress-starter\docs\images\1.png)

5. 等待几秒钟，安装完成后，您会在浏览器右上角的扩展菜单中看到篡改猴扩展 。

>  tip 提示 如果您没有看到图标，请点击工具栏上的“拼图”图标（扩展菜单），然后点击 Tampermonkey 旁边的“眼睛”图标将其固定在工具栏上。
>

## 第二步：安装倍速脚本

扩展环境准备好后，我们就可以安装脚本了。

1. 点击下方链接访问脚本发布页面（GreasyFork）：
   - [**通用网页倍速控制器 - GreasyFork**](https://greasyfork.org/zh-CN/scripts/557217)

2. 在页面中找到绿色的 **“安装此脚本”** 按钮并点击。

   ![2](E:\git\web-change-speed\vuepress\vuepress-starter\docs\images\2.png)

3. 浏览器会自动跳转到 Tampermonkey 的安装确认页面。此页面列出了脚本的源代码和权限信息。

4. 点击页面左侧或上方的 **“安装 (Install)”** 按钮。

5. 页面会自动关闭，此时脚本已成功安装。

## 第三步：验证与使用

现在，我们来测试脚本是否正常工作。

1. 重启你的浏览器。

2. 打开任意一个包含视频的网站（例如 Bilibili），或者打开一个 Unity 网页游戏。

3. 观察页面 **左上角**，您应该能看到一个半透明的黑色悬浮窗，上面写着 **“⚡ 全局加速”**。

4. **如何使用**：

   - **鼠标移入**：将鼠标移动到悬浮窗上，它会变清晰并展开。
   - **输入倍速**：在输入框中输入数字（例如 `3`）。
   - **应用**：点击“应用”按钮或按回车键。
   - **效果**：视频或游戏的运行速度将立即变为 3 倍。

**遇到问题？** 如果左上角没有出现悬浮窗，请检查：

1. Tampermonkey 扩展是否处于“开启”状态。
2. 尝试刷新一下网页（F5）。