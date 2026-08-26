# AI 原生 SDLC 中文手册

一份基于 Anthropic《The AI-Native SDLC playbook》整理的非官方中文学习手册。

它完整覆盖计划、设计、构建、测试、部署和维护六个阶段，用原创中文解释版本化产物链、人类责任门、Hooks、智能体评测、分级权限与维护闭环。它不是逐段翻译，也不是 Anthropic 官方中文版。

## 本地检查

```bash
npm install
npm run dev
```

## 构建 GitHub Pages

```bash
node scripts/build-pages.mjs
```

静态页面输出到 `pages-dist/`。推送 `main` 后，GitHub Actions 会部署 GitHub Pages。

## 来源

- Louis Claxton, [The AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), Claude by Anthropic, 2026-08-21.
- [Claude Code documentation](https://code.claude.com/docs/en/overview).

## 版权

本站原创中文文字与自制图形采用 [CC BY-NC-SA 4.0](LICENSE)。Anthropic、Claude、英文原文及相关商标归原权利人所有，不包含在本站许可范围内。
