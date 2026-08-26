# AI 原生软件开发生命周期中文手册

一份基于 Anthropic《The AI-Native SDLC playbook》整理的非官方中文学习手册。

它完整覆盖计划、设计、构建、测试、部署和维护六个阶段，用原创中文解释版本化产物链、人类责任门、Hooks、智能体评测、分级权限与维护闭环。它不是逐段翻译，也不是 Anthropic 官方中文版。

站点提供按责任划分的阅读路线、文档全文搜索、每页目录与阅读进度、原文与官方文档来源提示、代码复制、打印 / 导出 PDF，以及 `intent.md`、`spec.md`、`plan.md`、`CLAUDE.md`、`REVIEW.md` 和 `agent-evals.yml` 六个可下载起始模板。

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

站点地址：<https://huiyonghkw.github.io/ai-native-sdlc-guide/>

## 来源

- Louis Claxton, [The AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), Claude by Anthropic, 2026-08-21.
- [Claude Code documentation](https://code.claude.com/docs/en/overview).

## 版权

本站原创中文文字与自制图形采用 [CC BY-NC-SA 4.0](LICENSE)。Anthropic、Claude、英文原文及相关商标归原权利人所有，不包含在本站许可范围内。
