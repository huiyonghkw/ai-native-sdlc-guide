import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase:new URL("https://huiyonghkw.github.io/ai-native-sdlc-guide/"),
  title:"AI 原生软件开发生命周期中文手册",
  description:"完整理解 Anthropic AI-Native SDLC playbook 的非官方中文深度解读。",
  keywords:["AI 原生 SDLC","Claude Code","软件开发生命周期","智能体工程","工程治理"],
  alternates:{canonical:"/"},
  openGraph:{type:"website",title:"AI 原生软件开发生命周期中文手册",description:"代码写快以后，研发流程为什么反而堵了？",images:["https://huiyonghkw.github.io/ai-native-sdlc-guide/og.png"]},
  twitter:{card:"summary_large_image",title:"AI 原生软件开发生命周期中文手册",description:"代码写快以后，研发流程为什么反而堵了？",images:["https://huiyonghkw.github.io/ai-native-sdlc-guide/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
