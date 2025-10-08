import fs from 'fs/promises';
import Header from '../components/Header';
import ContinueAccordion from '../components/ContinueAccordion';
import MdxContent from '../components/MdxContent';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { mdxComponents } from '../components/mdx-components';

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
    },
};

export default async function Home() {
  const fileContent = await fs.readFile(process.cwd() + '/src/components/CourseContent.mdx', 'utf-8');
  
  const lines = fileContent.split('\n');
  const sections = [];
  let currentSectionLines = [];

  for (const line of lines) {
    if (line === '---') {
      sections.push(currentSectionLines.join('\n'));
      currentSectionLines = [];
    } else {
      currentSectionLines.push(line);
    }
  }
  sections.push(currentSectionLines.join('\n'));

  return (
    <div className="flex flex-col h-screen bg-black">
      <Header />
      <main className="flex-grow flex flex-col items-center overflow-y-auto">
        {sections.filter(s => s.trim() !== '').map((section, index) => (
          <div key={index} className="w-full max-w-2xl my-2">
            <MdxContent>
              <MDXRemote source={section} options={options} components={mdxComponents} />
            </MdxContent>
          </div>
        ))}
      </main>
      <ContinueAccordion />
    </div>
  );
}
