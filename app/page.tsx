import Link from "next/link";
import {ShareTools} from "./guide/ShareTools";

const stages=[
  ["01","计划","把模糊想法写成可审查的 intent.md","/guide/plan"],
  ["02","设计","让约束在 spec.md 里提前生效","/guide/design"],
  ["03","构建","先审 plan.md，再让智能体动手","/guide/build"],
  ["04","测试","代码要回归，智能体配置也要回归","/guide/test"],
  ["05","部署","PR、Hooks 与人类批准门","/guide/deploy"],
  ["06","维护","让生产信号重新变成下一份 intent","/guide/maintain"],
];

const routes=[
  ["产品与设计","先把问题、约束和验收写清楚","/guide/plan","计划 → 设计"],
  ["工程团队","让计划、代码和测试形成反馈闭环","/guide/build","构建 → 测试"],
  ["平台与安全","把权限、沙箱、Hooks 和 CI 变成门","/guide/gates","治理控制"],
  ["管理者与值班","看懂责任、指标和生产回流","/guide/governance","治理 → 维护"],
];

export default function Home(){
  return <main>
    <header className="topbar"><Link className="brand" href="/">AI 原生 SDLC</Link><nav aria-label="主导航"><Link className="active" href="/">产品</Link><Link href="/guide">文档</Link><Link href="/guide/templates">模板</Link><Link href="/guide/sources">来源</Link><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header>
    <section className="hero shell">
      <div className="eyebrow"><span className="signal"/>非官方中文学习手册 · 2026</div>
      <h1>代码写快以后，<br/><span>研发流程反而堵了。</span></h1>
      <p className="lede">Anthropic 的 AI 原生软件开发生命周期，真正改造的不是一段代码，而是计划、设计、构建、测试、部署和维护之间的整条交接链。</p>
      <div className="actions"><Link className="primary" href="/guide">开始阅读</Link><a className="secondary" href="https://claude.com/blog/the-ai-native-sdlc-playbook" target="_blank" rel="noreferrer">核对英文原文 ↗</a><Link className="secondary" href="/guide/templates">下载模板</Link></div>
      <div className="hero-stats" aria-label="手册规模"><div><strong>14</strong><span>篇文档</span></div><div><strong>6</strong><span>个阶段</span></div><div><strong>20–50</strong><span>个 eval 起步样本</span></div><div><strong>1</strong><span>条可回流产物链</span></div></div>
      <div className="bottleneck" aria-label="瓶颈迁移示意"><div><small>旧瓶颈</small><strong>BUILD</strong><span>人工写代码</span></div><i>→</i><div className="hot"><small>新瓶颈</small><strong>PLAN · TEST · DEPLOY</strong><span>交接、验证与批准</span></div></div>
    </section>

    <section className="section shell"><div className="section-head"><span>THE LOOP</span><h2>六个阶段，一条能回流的产物链</h2></div><div className="stage-grid">{stages.map(([number,title,description,href])=><Link className="stage-card" href={href} key={number}><span className="stage-no">{number}</span><h3>{title}</h3><p>{description}</p><b>阅读 →</b></Link>)}</div></section>

    <section className="section shell routes-section"><div className="section-head"><span>CHOOSE A ROUTE</span><h2>按你的责任，挑一条入口</h2></div><div className="route-grid">{routes.map(([title,description,href,label])=><Link className="route-card" href={href} key={title}><span>{label}</span><h3>{title}</h3><p>{description}</p><b>从这里开始 →</b></Link>)}</div></section>

    <section className="section shell dependency-section"><div className="section-head"><span>DEPENDENCY MAP</span><h2>先建立什么，后放开什么</h2></div><div className="dependency-map"><div><small>01 · 共同真源</small><strong>intent / spec / plan</strong><p>先让每一步都有可追溯的输入与产物。</p></div><i>→</i><div><small>02 · 可判错的反馈</small><strong>tests / evals / review</strong><p>再让智能体知道什么叫完成、哪里必须停。</p></div><i>→</i><div><small>03 · 受控的行动</small><strong>hooks / sandbox / CI</strong><p>最后才增加并行、写入和自动触发。</p></div></div></section>

    <section className="artifact shell"><div><span>COMMITTED ARTIFACTS</span><h2>聊天会结束，产物必须留下来</h2><p>每一阶段都写下一个人和智能体都能读取的版本化产物。提交记录保存谁提出、谁修改、谁批准，以及下一步为什么被触发。</p><Link className="inline-link" href="/guide/templates">查看并下载 6 个模板 →</Link></div><ol><li><code>intent.md</code><em>问题与结果</em></li><li><code>spec.md</code><em>需求与约束</em></li><li><code>plan.md</code><em>文件、顺序、验证</em></li><li><code>diff + tests</code><em>实现与证据</em></li><li><code>PR + incident</code><em>批准与回流</em></li></ol></section>

    <section className="section shell update-section"><div className="update-panel"><div><span>LAST UPDATED · 2026-08-26</span><h2>这次更新了什么</h2><p>补齐原文主题覆盖矩阵，扩展真源、Skills、Hooks、持续评测、PR 评审、企业托管、CI/CD 与维护闭环，并加入可下载模板、搜索和打印入口。</p></div><div className="update-list"><div><b>覆盖</b><span>14 篇文档 · 42 个主题</span></div><div><b>边界</b><span>原创解读，不是官方译本</span></div><div><b>反馈</b><span>欢迎在 GitHub 提交修正建议</span></div><div className="repo-links"><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide" target="_blank" rel="noreferrer">Star / Fork ↗</a><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide/issues/new" target="_blank" rel="noreferrer">提交反馈 ↗</a></div></div></div><div className="share-panel"><div><span>SHARE THIS GUIDE</span><h2>把入口带回团队</h2><p>适合放进项目 README、团队知识库或公众号文章末尾。链接始终指向可更新的 GitHub Pages。</p><a className="inline-link" href="/share-copy.md" download>下载公众号发布素材 →</a></div><ShareTools/></div></section>

    <footer className="footer shell"><p>会勇禾口王的 AI 笔记 · @huiyonghkw</p><p><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide" target="_blank" rel="noreferrer">GitHub 仓库 ↗</a> · 基于 Louis Claxton 的文章整理与原创解读，不是 Anthropic 官方译本。</p></footer>
  </main>;
}
