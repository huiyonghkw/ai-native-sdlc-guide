import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:"AI 原生 SDLC 中文手册",
  description:"完整理解 Anthropic AI-Native SDLC playbook 的非官方中文学习手册。",
  openGraph:{title:"AI 原生 SDLC 中文手册",description:"代码写快以后，研发流程为什么反而堵了？",images:["https://huiyonghkw.github.io/ai-native-sdlc-guide/og.png"]},
  twitter:{card:"summary_large_image",title:"AI 原生 SDLC 中文手册",description:"代码写快以后，研发流程为什么反而堵了？",images:["https://huiyonghkw.github.io/ai-native-sdlc-guide/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
