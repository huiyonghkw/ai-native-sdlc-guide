"use client";

import {useState} from "react";

export function CopyButton({text}:{text:string}){
  const [copied,setCopied]=useState(false);
  const copy=async()=>{
    try{await navigator.clipboard.writeText(text);setCopied(true);window.setTimeout(()=>setCopied(false),1600);}catch{window.prompt("复制这段内容",text);}
  };
  return <button className="copy-code" type="button" onClick={copy}>{copied?"已复制":"复制"}</button>;
}
