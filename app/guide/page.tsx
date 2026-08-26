import {DocsShell,DocBody} from "./DocsShell";import {getDoc} from "./docs";
export default function Guide(){const doc=getDoc("concepts")!;return <DocsShell doc={doc}><DocBody doc={doc}/></DocsShell>}
