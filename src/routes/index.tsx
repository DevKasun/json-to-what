import { createFileRoute } from "@tanstack/react-router";
import MonacoEditorComponent from "../components/MonacoEditorComponent";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex flex-row gap-4">
      <MonacoEditorComponent
        value={() => {
          return "Hello World";
        }}
        onChange={() => {}}
      />
      <MonacoEditorComponent
        value={() => {
          return "Hello World";
        }}
        onChange={() => {}}
      />
    </div>
  );
}
