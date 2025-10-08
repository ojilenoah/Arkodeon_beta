import type { MDXComponents } from 'mdx/types';
import { MdxPre } from './MdxPre';

// This object can be imported and used by server components.
export const mdxComponents: MDXComponents = {
  pre: MdxPre,
  h1: (props) => <h1 className="text-3xl font-bold mb-4 text-white" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mb-3 text-white" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mb-3 text-white" {...props} />,
  h4: (props) => <h4 className="text-lg font-bold mb-2 text-white" {...props} />,
  h5: (props) => <h5 className="text-base font-bold mb-2 text-white" {...props} />,
  h6: (props) => <h6 className="text-sm font-bold mb-2 text-white" {...props} />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-3">
      <table className="min-w-full border-collapse border border-gray-800" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <thead className="bg-[#1a1a1a]" {...props} />,
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => <th className="border border-gray-800 px-4 py-2 text-left font-semibold text-white" {...props} />,
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => <td className="border border-gray-800 px-4 py-2 text-gray-300" {...props} />,
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <tr className="hover:bg-[#1a1a1a]" {...props} />,
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img className="max-w-full h-auto rounded mb-3" {...props} />,
};

// This hook can be used by client components to access the same components.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
