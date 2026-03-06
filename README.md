# 越南美食个人售卖页

这是一个纯静态网站，适合实验阶段快速上线。

## 已支持能力
- 中 / 越 / 英三语言切换（本地字典，不依赖外部翻译服务）
- 商品图片、价格、可售数量展示
- 联系方式展示
- 语言选择自动记忆（localStorage）
- 页面不依赖 Google Fonts / 外部 JS CDN

## 目录
- `index.html` 页面结构
- `style.css` 样式
- `script.js` 商品数据 + 多语言文本 + 渲染逻辑
- `assets/` 本地商品图片资源

## 维护方式
只改 `script.js` 里的 `storeData`：
- `lastUpdated`：更新时间
- `contact`：联系人、电话、微信
- `products`：商品价格、库存、图片

多语言文案在 `script.js` 里的 `i18n` 对象里维护。

## 部署（GitHub + Cloudflare Pages）
1. 把代码推送到 GitHub 仓库。
2. Cloudflare Pages 连接该仓库。
3. Build 命令留空（静态站）。
4. Output 目录设为根目录 `/`。
5. 添加自定义域名：`shop.caesarzz.dpdns.org`。
6. 在 DNS 添加 CNAME：`shop -> <your-project>.pages.dev`。

## 实验阶段提醒
- 当前图片是本地示意图（`assets/*.svg`）。
- 你可以替换成自己的实拍图文件（建议也放本地或你自己的可达存储），并在 `script.js` 里更新路径。
