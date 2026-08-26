"use client";

import {useState} from "react";

export function ShareTools(){
  const [copied,setCopied]=useState(false);
  const copy=async()=>{
    const url=window.location.href;
    try{
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(()=>setCopied(false),1800);
    }catch{
      window.prompt("复制这条链接",url);
    }
  };
  const share=async()=>{
    if(navigator.share){await navigator.share({title:"AI 原生软件开发生命周期中文手册",text:"代码写快以后，研发流程为什么反而堵了？",url:window.location.href});return;}
    await copy();
  };
  return <div className="share-tools" aria-label="分享工具"><button className="tool-button" type="button" onClick={copy}>{copied?"已复制链接":"复制页面链接"}</button><button className="tool-button tool-button-dark" type="button" onClick={share}>分享这页</button></div>;
}
