'use client';

import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  toolbarPlugin,
  linkPlugin,
  codeBlockPlugin,
} from '@mdxeditor/editor';
import { FC } from 'react';
import '@mdxeditor/editor/style.css';
interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        toolbarPlugin(),
        linkPlugin(),
        codeBlockPlugin(),
      ]}
    />
  );
};

export default Editor;
