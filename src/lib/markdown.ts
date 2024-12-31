import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = join(process.cwd(), 'src/content');

export async function getMarkdownContent(path: string) {
  const fullPath = join(contentDirectory, path);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  
  return processedContent.toString();
}

export function getAllPaths() {
  // This will be implemented to get all markdown files recursively
  return [
    'README.md',
    'projects/project-1.md',
    'projects/project-2.md'
  ];
} 