import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the finished Chinese product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>AI 原生软件开发生命周期中文手册<\/title>/i);
  assert.match(html, /代码写快以后/);
  assert.match(html, /六个阶段，一条能回流的产物链/);
  assert.match(html, /不是 Anthropic 官方译本/);
  assert.doesNotMatch(html, /codex-preview|Building your site|SkeletonPreview/i);
});

test("keeps the expanded guide, local font, and copyright boundary in source", async () => {
  const [docs, css, buildScript] = await Promise.all([
    readFile(new URL("../app/guide/docs.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../scripts/build-pages.mjs", import.meta.url), "utf8"),
  ]);
  const slugs = [...docs.matchAll(/slug:"([^"]+)"/g)].map(match => match[1]);
  assert.equal(slugs.length, 14);
  for (const slug of ["concepts", "knowledge", "test", "gates", "maintain", "metrics", "sources"]) {
    assert.ok(slugs.includes(slug), `missing ${slug}`);
  }
  assert.match(docs, /CLAUDE\.md/);
  assert.match(docs, /Continuous|持续 eval/i);
  assert.match(docs, /docGroups/);
  assert.match(docs, /templateFiles/);
  assert.match(docs, /不是 Anthropic 官方译本或逐句翻译/);
  assert.match(css, /NotoSansSC-Variable\.woff2/);
  assert.match(buildScript, /cpSync\(join\(root,"public\/fonts"\)/);
});

test("renders representative deep guide routes", async () => {
  for (const [path, expected] of [
    ["/guide/knowledge", "真源、CLAUDE.md、Skills 与 Hooks"],
    ["/guide/gates", "Hooks、托管设置与 CI/CD"],
    ["/guide/maintain", "确定性检测，智能体诊断并闭环"],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("publishes search, source, template, and print affordances", async () => {
  const response = await render("/guide/templates");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /搜索手册/);
  assert.match(html, /Anthropic 原文/);
  assert.match(html, /intent\.md/);
  assert.match(html, /打印 \/ 导出 PDF/);
  assert.match(html, /id="section-1"/);
});
