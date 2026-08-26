import Link from "next/link";
import {docs,docGroups,templateFiles,Doc} from "./docs";
import {SearchBox} from "./SearchBox";
import {PrintButton} from "./PrintButton";
import {CopyButton} from "./CopyButton";

const articleUrl="https://claude.com/blog/the-ai-native-sdlc-playbook";
const officialDocsUrl="https://code.claude.com/docs/en/overview";
const docHref=(slug:string)=>slug==="concepts"?"/guide":`/guide/${slug}`;
const docText=(doc:Doc)=>[
  doc.title,doc.summary,
  ...doc.sections.flatMap(section=>[section.heading,...(section.paragraphs||[]),...(section.bullets||[]),section.code||"",section.note||""]),
].join("");
const readMinutes=(doc:Doc)=>Math.max(3,Math.ceil(docText(doc).replace(/\s/g,"").length/420));

function Sidebar({current}:{current:string}){
  return <aside className="sidebar" aria-label="文档目录">
    <SearchBox/>
    <div className="sidebar-nav">
      {docGroups.map(group=><div className="sidebar-group" key={group.label}>
        <p className="sidebar-group-title">{group.label}</p>
        {group.slugs.map(slug=>{const item=docs.find(doc=>doc.slug===slug);if(!item)return null;return <Link className={item.slug===current?"current":""} href={docHref(item.slug)} key={item.slug}><span>{item.number}</span>{item.title.split("：")[0]}</Link>;})}
      </div>)}
    </div>
    <div className="sidebar-source"><small>英文原文</small><a href={articleUrl} target="_blank" rel="noreferrer">Claude · 2026-08-21 ↗</a></div>
  </aside>;
}

function TemplateDownloads(){
  return <section className="template-downloads" aria-labelledby="template-downloads-title">
    <div className="template-downloads-head"><span>DOWNLOADABLE STARTERS</span><h2 id="template-downloads-title">下载一套可直接改的起始文件</h2><p>这些文件是试点骨架，不是生产配置。下载后放进自己的仓库，按责任、权限和合规要求继续修改。</p></div>
    <div className="template-grid">{templateFiles.map(file=><a className="template-card" href={`/templates/${file.file}`} download key={file.file}><div><code>{file.label}</code><span>↓</span></div><p>{file.description}</p><small>下载 Markdown / YAML</small></a>)}</div>
  </section>;
}

export function DocsShell({doc,children}:{doc:Doc;children:React.ReactNode}){
  const i=docs.findIndex(d=>d.slug===doc.slug),prev=docs[i-1],next=docs[i+1];
  const progress=Math.round(((i+1)/docs.length)*100);
  return <main><header className="topbar"><Link className="brand" href="/">AI 原生 SDLC</Link><nav aria-label="主导航"><Link href="/">产品</Link><Link className="active" href="/guide">文档</Link><Link href="/guide/templates">模板</Link><Link href="/guide/sources">来源</Link><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header><div className="docs-shell"><Sidebar current={doc.slug}/><article className="doc"><div className="crumb"><Link href="/">首页</Link><span>/</span><Link href="/guide">文档</Link><span>/</span>{doc.title}</div><p className="doc-kicker">{doc.number} · {doc.kicker}</p><h1>{doc.title}</h1><p className="doc-summary">{doc.summary}</p><div className="doc-meta"><span>第 {i+1} / {docs.length} 篇</span><span>约 {readMinutes(doc)} 分钟</span><span>{doc.sections.length} 个主题</span></div><div className="doc-progress" aria-label={`阅读进度 ${progress}%`}><span style={{width:`${progress}%`}}/></div><aside className="doc-source-line"><span>本页依据</span><a href={articleUrl} target="_blank" rel="noreferrer">Anthropic 原文</a><i>·</i><a href={officialDocsUrl} target="_blank" rel="noreferrer">Claude Code 官方文档</a><small>中文内容为原创解读与实践归纳</small></aside><nav className="doc-toc" aria-label="本页目录"><span>本页目录</span><div>{doc.sections.map((section,index)=><a href={`#section-${index+1}`} key={section.heading}>{String(index+1).padStart(2,"0")} {section.heading}</a>)}</div></nav><div className="doc-actions"><Link className="tool-button" href="/guide/templates">下载配套模板</Link><PrintButton/></div>{doc.slug==="templates"&&<TemplateDownloads/>}{children}<nav className="pager">{prev?<Link href={docHref(prev.slug)}><small>上一篇</small><b>← {prev.title}</b></Link>:<span/>}{next?<Link href={docHref(next.slug)}><small>下一篇</small><b>{next.title} →</b></Link>:<span/>}</nav></article></div><footer className="footer docs-footer shell"><p>会勇禾口王的 AI 笔记 · @huiyonghkw</p><p><a href="https://github.com/huiyonghkw/ai-native-sdlc-guide" target="_blank" rel="noreferrer">GitHub 仓库 ↗</a> · 非官方中文学习手册 · 请以英文原文为准</p></footer></main>;
}

export function DocBody({doc}:{doc:Doc}){return <>{doc.sections.map((section,index)=><section className="doc-section" id={`section-${index+1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}{section.code&&<div className="code-block"><pre><code>{section.code}</code></pre><CopyButton text={section.code}/></div>}{section.note&&<aside className="note"><b>注意</b><p>{section.note}</p></aside>}</section>)}</>}
