"use client";

import Link from "next/link";
import {useEffect,useMemo,useRef,useState} from "react";
import {docs} from "./docs";

const docHref=(slug:string)=>slug==="concepts"?"/guide":`/guide/${slug}`;
const searchable=(doc:(typeof docs)[number])=>[
  doc.title,doc.kicker,doc.summary,
  ...doc.sections.flatMap(section=>[section.heading,...(section.paragraphs||[]),...(section.bullets||[]),section.code||"",section.note||""]),
].join(" ");

export function SearchBox(){
  const [query,setQuery]=useState("");
  const inputRef=useRef<HTMLInputElement>(null);
  const results=useMemo(()=>{
    const normalized=query.trim().toLocaleLowerCase();
    if(!normalized)return [];
    return docs.filter(doc=>searchable(doc).toLocaleLowerCase().includes(normalized)).slice(0,6);
  },[query]);
  useEffect(()=>{
    const onKeyDown=(event:KeyboardEvent)=>{
      if(event.key==="/" && !["INPUT","TEXTAREA","SELECT"].includes((event.target as HTMLElement)?.tagName||"")){
        event.preventDefault();
        inputRef.current?.focus();
      }
      if(event.key==="Escape"){
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown",onKeyDown);
    return()=>window.removeEventListener("keydown",onKeyDown);
  },[]);
  return <div className="search-box">
    <label htmlFor="doc-search">搜索手册</label>
    <div className="search-input-wrap"><input ref={inputRef} id="doc-search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="搜索主题、文件或术语" aria-controls="doc-search-results"/><kbd>/</kbd></div>
    {query.trim() && <div className="search-results" id="doc-search-results" role="listbox" aria-label="搜索结果">
      {results.length?results.map(doc=><Link href={docHref(doc.slug)} key={doc.slug} role="option"><span>{doc.number}</span><b>{doc.title}</b><small>{doc.summary}</small></Link>):<p>没有找到匹配内容</p>}
    </div>}
  </div>;
}
