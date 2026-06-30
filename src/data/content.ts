/**
 * 零壹 01 — 全站文案与内容数据
 * 所有首页文案集中在此，便于后续维护与替换。
 */

export const nav = {
  brand: { zh: "零壹", code: "01" },
  links: [
    { label: "首页", href: "#home" },
    { label: "产品", href: "#products" },
    { label: "解决方案", href: "#solutions" },
    { label: "关于我们", href: "#about" },
    { label: "联系我们", href: "#contact" },
  ],
  actions: {
    secondary: { label: "查看产品", href: "#products" },
    primary: { label: "联系合作", href: "#contact" },
  },
};

export const hero = {
  badge: "AI Native · SaaS · Automation",
  title: ["零壹科技", "从 0 到 1", "构建未来产品"],
  subtitle:
    "我们专注于 AI、SaaS、智能工具与互联网产品研发，将想法快速转化为可落地、可增长、可商业化的数字产品。",
  keywords: [
    "AI Native",
    "SaaS",
    "Automation",
    "Knowledge Base",
    "Web App",
    "Mini Program",
  ],
  actions: {
    primary: { label: "探索产品", href: "#products" },
    secondary: { label: "联系我们", href: "#contact" },
  },
};

export const capabilities = {
  index: "0x01",
  eyebrow: "Capabilities",
  title: "我们擅长把技术变成产品",
  subtitle: "从模型到界面，从架构到交付 —— 全栈能力，闭环落地。",
  items: [
    {
      no: "01",
      title: "AI 产品研发",
      desc: "基于大模型、知识库、RAG、智能问答等能力，构建企业级 AI 应用。",
      tags: ["LLM", "RAG", "Agent"],
    },
    {
      no: "02",
      title: "SaaS 系统开发",
      desc: "支持多租户、权限管理、订阅计费、数据看板和企业级后台。",
      tags: ["多租户", "计费", "看板"],
    },
    {
      no: "03",
      title: "Web / 小程序 / App",
      desc: "覆盖官网、管理后台、移动端、小程序和跨平台应用。",
      tags: ["Web", "小程序", "App"],
    },
    {
      no: "04",
      title: "自动化与效率工具",
      desc: "帮助企业优化流程，提升内容、客服、运营和协作效率。",
      tags: ["流程", "客服", "协作"],
    },
  ],
};

export const products = {
  index: "0x02",
  eyebrow: "Product Matrix",
  title: "我们的产品矩阵",
  subtitle: "已落地与持续孵化中的产品，覆盖 AI、隐私通信、内容平台与互动娱乐。",
  items: [
    {
      no: "01",
      name: "零壹 AI 企业知识库助手",
      type: "AI SaaS / 企业知识库",
      desc: "面向企业内部资料管理与智能问答场景，支持企业上传文档，员工通过企业微信、网页端等入口进行提问，AI 基于企业知识库给出准确回答，提升内部协作和知识流转效率。",
      tags: ["AI 知识库", "企业微信", "RAG", "多租户", "文档解析"],
      accent: "electric",
    },
    {
      no: "02",
      name: "EncryptedChat 加密聊天",
      type: "隐私通信工具",
      desc: "一款注重隐私保护的加密聊天产品，支持用户、好友、群组等基础通信能力，目标是让用户拥有更安全、更私密的在线沟通体验。",
      tags: ["端到端加密", "隐私保护", "聊天系统", "Web App"],
      accent: "cyan",
    },
    {
      no: "03",
      name: "DollyVault 图片聚合平台",
      type: "内容聚合 / 图片展示",
      desc: "面向垂直兴趣内容的图片聚合与展示平台，用于整理、收藏和浏览特定主题的图片内容，适合做内容社区、图库和商品灵感库方向拓展。",
      tags: ["图片聚合", "内容平台", "OSS 存储", "前后端分离"],
      accent: "violet",
    },
    {
      no: "04",
      name: "小游戏与互动产品",
      type: "游戏 / 小程序 / 互动娱乐",
      desc: "探索轻量级小游戏、微信小游戏、互动活动和社区娱乐产品，覆盖塔防、2048、剧情互动等方向，用游戏化方式提升用户参与感。",
      tags: ["Cocos", "微信小游戏", "互动体验", "社区活动"],
      accent: "electric",
    },
  ],
};

export const solutions = {
  index: "0x03",
  eyebrow: "Solutions",
  title: "为不同场景提供从 0 到 1 的产品方案",
  subtitle: "根据团队规模与业务阶段，匹配最合适的落地路径。",
  items: [
    {
      no: "01",
      title: "企业 AI 知识库解决方案",
      fit: "企业内部文档、客服知识库、员工助手、培训资料问答。",
      points: ["文档智能解析", "私有化部署可选", "企业微信 / 网页接入"],
    },
    {
      no: "02",
      title: "SaaS 商业化系统解决方案",
      fit: "订阅制产品、企业后台、权限系统、支付计费、运营管理。",
      points: ["多租户架构", "订阅与计费", "数据看板"],
    },
    {
      no: "03",
      title: "创意产品快速孵化方案",
      fit: "个人创业者、小团队、内容平台、小游戏、工具站、MVP 验证。",
      points: ["MVP 快速验证", "全栈一体交付", "上线即可增长"],
    },
  ],
};

export const stats = {
  index: "0x04",
  eyebrow: "Why 01",
  title: "从一行代码，到一份商业价值",
  items: [
    {
      key: "01",
      label: "From Zero to One",
      desc: "从 0 到 1 的产品孵化能力，陪跑想法到上线。",
    },
    {
      key: "AI",
      label: "Models in Production",
      desc: "大模型应用落地，RAG 与智能体工程化。",
    },
    {
      key: "SaaS",
      label: "Enterprise Architecture",
      desc: "企业级系统架构，多租户、计费与权限。",
    },
    {
      key: "Full Stack",
      label: "End to End Delivery",
      desc: "前后端一体化交付，设计、研发到运维。",
    },
  ],
};

export const about = {
  index: "0x05",
  eyebrow: "About 零壹",
  title: "一家面向未来的技术产品工作室",
  body: "零壹是一家面向未来的技术产品工作室。我们相信，每一个伟大的产品都开始于 0，但真正的价值来自迈出 1 的那一步。我们关注 AI、SaaS、自动化、内容平台和互动产品，致力于用技术帮助想法快速落地。",
  pillars: [
    { k: "Focus", v: "AI · SaaS · 自动化 · 内容 · 互动" },
    { k: "Belief", v: "0 是起点，1 是价值" },
    { k: "Way", v: "规划 → 设计 → 开发 → 上线" },
  ],
};

export const contact = {
  index: "0x06",
  eyebrow: "Let's Build",
  title: "有想法？让我们一起从 0 到 1。",
  body: "无论你想打造企业 AI 助手、SaaS 系统、官网、小程序、工具产品，还是一个全新的互联网项目，零壹都可以帮助你完成从规划、设计、开发到上线的全过程。",
  actions: {
    primary: { label: "联系合作", href: "mailto:hello@lingyi01.com" },
    secondary: { label: "查看产品", href: "#products" },
  },
  channels: [
    { k: "Email", v: "hello@lingyi01.com" },
    { k: "WeChat", v: "lingyi-01" },
    { k: "Hours", v: "Mon – Fri · 10:00–19:00" },
  ],
};

export const footer = {
  brand: { zh: "零壹", code: "01" },
  tagline: "From Zero to One",
  copyright: "© 2026 零壹科技. All rights reserved.",
  columns: [
    {
      title: "产品",
      links: [
        { label: "AI 企业知识库", href: "#products" },
        { label: "EncryptedChat", href: "#products" },
        { label: "DollyVault", href: "#products" },
        { label: "小游戏与互动", href: "#products" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "#about" },
        { label: "解决方案", href: "#solutions" },
        { label: "能力", href: "#capabilities" },
        { label: "联系我们", href: "#contact" },
      ],
    },
  ],
};
