import { useRef } from "react";
import Editor from "@monaco-editor/react";

interface MonacoEditorComponentProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MonacoEditorComponentState {
  editorRef: React.RefObject<Editor>;
}

export default function MonacoEditorComponent({
  value,
  onChange,
}: MonacoEditorComponentProps) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <Editor
      height="80vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
  );
}
