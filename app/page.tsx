import Link from "next/link";

const stages = [
  ["01", "计划", "把模糊想法写成可审查的 intent.md", "/guide/plan"],
  ["02", "设计", "让约束在 spec.md 里提前生效", "/guide/design"],
  ["03", "构建", "先审 plan.md，再让智能体动手", "/guide/build"],
  ["04", "测试", "代码要回归，智能体配置也要回归", "/guide/test"],
  ["05", "部署", "PR、Hooks 与人类批准门", "/guide/deploy"],
  ["06", "维护", "让生产信号重新变成下一份 intent", "/guide/maintain"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">AI-NATIVE SDLC</Link>
        <nav aria-label="主导航">
          <Link className="active" href="/">产品</Link><Link href="/guide">文档</Link>
          <Link href="/guide/templates">模板</Link><Link href="/guide/sources">来源</Link>
        </nav>
      </header>
      <section className="hero shell">
        <div className="eyebrow"><span className="signal" />非官方中文学习手册 · 2026</div>
        <h1>代码写快以后，<br /><span>研发流程反而堵了。</span></h1>
        <p className="lede">Anthropic 的 AI 原生软件开发生命周期，真正改造的不是一段代码，而是计划、设计、构建、测试、部署和维护之间的整条交接链。</p>
        <div className="actions"><Link className="primary" href="/guide">开始阅读</Link><a className="secondary" href="https://claude.com/blog/the-ai-native-sdlc-playbook">核对英文原文</a></div>
        <div className="bottleneck" aria-label="瓶颈迁移示意">
          <div><small>旧瓶颈</small><strong>BUILD</strong><span>人工写代码</span></div><i>→</i>
          <div className="hot"><small>新瓶颈</small><strong>PLAN · TEST · DEPLOY</strong><span>交接、验证与批准</span></div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-head"><span>THE LOOP</span><h2>六个阶段，一条能回流的产物链</h2></div>
        <div className="stage-grid">{stages.map(([n,title,desc,href])=><Link className="stage-card" href={href} key={n}><span className="stage-no">{n}</span><h3>{title}</h3><p>{desc}</p><b>阅读 →</b></Link>)}</div>
      </section>
      <section className="artifact shell">
        <div><span>COMMITTED ARTIFACTS</span><h2>聊天会结束，产物必须留下来</h2><p>每一阶段都写下一个人和智能体都能读取的版本化产物。提交记录保存谁提出、谁修改、谁批准，以及下一步为什么被触发。</p></div>
        <ol><li><code>intent.md</code><em>问题与结果</em></li><li><code>spec.md</code><em>需求与约束</em></li><li><code>plan.md</code><em>文件、顺序、验证</em></li><li><code>diff + tests</code><em>实现与证据</em></li><li><code>PR + incident</code><em>批准与回流</em></li></ol>
      </section>
      <footer className="footer shell"><p>会勇禾口王的 AI 笔记 · @huiyonghkw</p><p>基于 Louis Claxton 的文章整理与原创解读，不是 Anthropic 官方译本。</p></footer>
    </main>
  );
}
