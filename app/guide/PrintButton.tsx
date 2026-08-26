"use client";

export function PrintButton(){
  return <button className="tool-button" type="button" onClick={()=>window.print()} aria-label="打印或导出 PDF">打印 / 导出 PDF</button>;
}
