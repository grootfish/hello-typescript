// ECMAScript 的内置对象
// Boolean、Error、Date、RegExp 等。
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

// DOM 和 BOM 的内置对象
// Document、HTMLElement、Event、NodeList 等。
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

// TypeScript 核心库的定义文件
interface Math {
  /**
   * Returns the value of a base expression taken to a specified power.
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   */
  pow(x: number, y: number): number;
}

interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
  addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}
// 用 TypeScript 写 Node.js
// npm install @types/node --save-dev
