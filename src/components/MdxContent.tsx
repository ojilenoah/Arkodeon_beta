'use client';

import { ReactNode, useEffect } from 'react';

export default function MdxContent({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    const loadHighlightCSS = async () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
      link.id = 'mdx-highlight-styles';
      
      const existingLink = document.getElementById('mdx-highlight-styles');
      if (!existingLink) {
        document.head.appendChild(link);
      }
    };
    
    loadHighlightCSS();
    
    return () => {
      const link = document.getElementById('mdx-highlight-styles');
      if (link) {
        link.remove();
      }
    };
  }, []);

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8 flex flex-col overflow-y-auto">
        {children}
    </div>
  );
}
