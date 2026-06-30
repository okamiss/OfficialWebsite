# 零壹 01 · From Zero to One

零壹科技官网首页 —— 科技 / 未来 / 高级感的暗色系 Landing Page。

技术栈：**React 18 + Vite 6 + TypeScript + Tailwind CSS v4**。
所有文案写死在前端，无需后端接口，响应式适配 PC 与移动端。

## 快速开始

```bash
# 1. 安装依赖（任选其一）
npm install

# 2. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 3. 生产构建 + 本地预览
npm run build
npm run preview
```

> 需要 Node.js ≥ 18。首次启动需联网加载 Google Fonts
> （Space Grotesk / Inter / JetBrains Mono / Noto Sans SC）。

## 设计语言

- **配色**：暗色 void `#050814` 为底，电光蓝 `#3b6dff`、青 `#22d3ee`、紫 `#8b5cf6` 渐变发光。
- **字体**：Space Grotesk（标题）/ Inter · Noto Sans SC（正文）/ JetBrains Mono（数字与标签）。
- **品牌记忆点**：贯穿全站的 `0 → 1` 二进制母题 —— Hero 控制台、分区编号 `0x0N`、About 的巨型 0→1 标记。
- **效果**：玻璃拟态、发光按钮、网格背景、光晕 orb、滚动淡入、卡片 hover 悬浮（均尊重 `prefers-reduced-motion`）。

## 目录结构

```
src/
├─ main.tsx              # 入口
├─ App.tsx               # 页面装配 + 滚动揭示
├─ index.css            # 设计令牌 / 工具类 / 动效
├─ data/content.ts       # ★ 全站文案（改这里即可替换内容）
├─ hooks/
│  ├─ useReveal.ts             # 滚动淡入（IntersectionObserver）
│  ├─ useInView.ts             # 进入视口检测
│  └─ usePrefersReducedMotion.ts  # 减少动效偏好检测
└─ components/
   ├─ Header.tsx          # 顶部导航（含移动端菜单）
   ├─ Hero.tsx + HeroConsole.tsx   # 首屏 + AI 控制台视觉
   ├─ Capabilities.tsx    # 公司能力
   ├─ Products.tsx        # 产品矩阵
   ├─ Solutions.tsx       # 解决方案
   ├─ Stats.tsx           # 数据 / 优势
   ├─ About.tsx           # 关于零壹
   ├─ Contact.tsx         # 联系我们
   ├─ Footer.tsx          # 页脚
   ├─ SectionHeading.tsx  # 通用分区标题
   ├─ Logo.tsx            # 零壹 01 标识
   └─ reactbits/          # react-bits 动效组件（见下）
      ├─ Aurora.tsx        # WebGL 极光背景（Hero）
      ├─ BlurText.tsx      # 逐字模糊淡入（Hero 副标题）
      ├─ CountUp.tsx       # 数字滚动（控制台指标）
      └─ ShinyText.tsx     # 流光文字（Hero 徽章 / 页脚标语）
```

## react-bits 动效组件

首页集成了 [react-bits](https://reactbits.dev)（DavidHDev/react-bits）的几个动效组件，
均为 **TS + Tailwind** 变体，源码已直接放入 [src/components/reactbits/](src/components/reactbits/)，
无需 CLI 即可使用。依赖：`ogl`（Aurora 的 WebGL）+ `motion`（其余动效）。

集成点（全部尊重 `prefers-reduced-motion`，关闭动效时自动降级为静态）：

| 组件 | 用在哪里 |
| --- | --- |
| **Aurora** | Hero 顶部极光背景（青/蓝/紫渐变流动） |
| **BlurText** | Hero 副标题逐字模糊淡入 |
| **CountUp** | AI 控制台的 100% / 42ms / 99.9% 数字滚动 |
| **ShinyText** | Hero 徽章、页脚 “FROM ZERO TO ONE” 流光 |

> 想再加组件：到 reactbits.dev 选 **TS + Tailwind** 变体，把源码放进
> `src/components/reactbits/`，安装它列出的依赖即可。
> （注意：react-bits 是组件库，不是可“安装”的 Claude skill / 插件。）

## 如何修改内容

几乎所有文字、产品、标签、链接都集中在 [`src/data/content.ts`](src/data/content.ts)。
修改产品矩阵、能力卡片、解决方案、联系方式时，只需编辑该文件中的对应数组，无需改动组件代码。
