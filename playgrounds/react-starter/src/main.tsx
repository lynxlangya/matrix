import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';

/**
 * React 应用程序的入口点文件。
 *
 * @fileoverview 此文件负责初始化 React 应用程序，设置错误处理，并将根组件渲染到 DOM。
 *
 * @remarks
 * - 使用 StrictMode 启用 React 的严格模式
 * - 配置了未捕获错误和已捕获错误的处理器
 * - 将应用挂载到 id 为 'root' 的 DOM 元素
 * - onUncaughtError 处理未捕获错误
 * - onCaughtError 处理已捕获错误
 */
createRoot(document.getElementById('root')!, {
  onUncaughtError: (err: unknown) => {
    console.error(`Uncaught error: ${err}`);
  },
  onCaughtError: (err: unknown) => {
    console.error(`Caught error: ${err}`);
  },
}).render(
  <StrictMode>
    <App />
  </StrictMode>
);
