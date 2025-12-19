import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Editor from "@monaco-editor/react";
import jsontToTS from "json-to-ts";
import debounce from "lodash.debounce";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [jsonInput, setJsonInput] = useState<string>(
    '{\n  "id": 1,\n  "name": "John Doe"\n}',
  );
  const [tsOutput, setTsOutput] = useState<string>("");

  const convertJsonToTS = (value: string | undefined) => {
    if (!value) return;

    try {
      const parsedJson = JSON.parse(value);
      const interfaces = jsontToTS(parsedJson);
      setTsOutput(interfaces.join("\n\n"));
    } catch (error) {
      console.log("Invalid JSON while typing...");
      console.error(error);
      setTsOutput("Invalid JSON");
    }
  };

  // Debounce the conversion to save CPU cycles
  const debouncedConvert = useCallback(
    debounce((value: string | undefined) => convertJsonToTS(value), 500),
    [],
  );

  // Initial conversion on mount
  useEffect(() => {
    convertJsonToTS(jsonInput);
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    setJsonInput(value || "");
    debouncedConvert(value);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="w-1/2">
        <h3 className="text-lg font-bold pb-2">JSON</h3>
        <Editor
          height="70vh"
          defaultLanguage="json"
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            formatOnPaste: true,
            automaticLayout: true,
          }}
          value={jsonInput}
          onChange={handleEditorChange}
        />
      </div>
      <div className="w-1/2">
        <h3 className="text-lg font-bold pb-2">TypeScript</h3>
        <Editor
          height="70vh"
          defaultLanguage="typescript"
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            formatOnPaste: true,
            automaticLayout: true,
          }}
          value={tsOutput}
        />
      </div>
    </div>
  );
}
