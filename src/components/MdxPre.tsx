'use client';

import React, { useState } from 'react';

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (execErr) {
        console.error('Fallback copy failed', execErr);
      }
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-gray-300 bg-zinc-800 rounded-md px-2 py-1 select-none hover:bg-zinc-700 transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

const getTextFromChildren = (node: React.ReactNode): string => {
  if (typeof node === 'string') {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(getTextFromChildren).join('');
  }
  if (React.isValidElement(node) && node.props.children) {
    return getTextFromChildren(node.props.children);
  }
  return '';
};

export function MdxPre({ children, ...props }: any) {
  const code = getTextFromChildren(children?.props?.children);
  
  const language = children?.props?.className
    ?.split(' ')
    .find((c: string) => c.startsWith('language-'))
    ?.replace('language-', '');

  return (
    <div className="relative mb-3">
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        {language && (
          <div className="text-xs text-green-400 bg-zinc-800 rounded-md px-2 py-1 select-none">
            {language}
          </div>
        )}
        {code && <CopyButton code={code} />}
      </div>
      <pre {...props} className="bg-[#1a1a1a] text-gray-100 rounded-lg border border-gray-800 p-3 overflow-x-auto hljs">
        {children}
      </pre>
    </div>
  );
}
