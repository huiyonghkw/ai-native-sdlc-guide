import {notFound} from "next/navigation";import {DocsShell,DocBody} from "../DocsShell";import {docs,getDoc} from "../docs";
export function generateStaticParams(){return docs.filter(d=>d.slug!=="concepts").map(d=>({slug:d.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const doc=getDoc(slug);if(!doc)notFound();return <DocsShell doc={doc}><DocBody doc={doc}/></DocsShell>}
