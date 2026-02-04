"use client";

import { useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Mulai menulis...",
  minHeight = "200px",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (
    command: string,
    value: string | undefined = undefined,
  ) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const insertLink = () => {
    const url = prompt("Masukkan URL:");
    if (url) {
      execCommand("createLink", url);
    }
  };

  const formatButton = (
    icon: React.ReactNode,
    command: string,
    title: string,
    value?: string,
  ) => (
    <button
      type="button"
      onClick={() =>
        command === "createLink" ? insertLink() : execCommand(command, value)
      }
      className="p-2 hover:bg-gray-200 rounded transition-colors text-gray-700 hover:text-blue-600"
      title={title}>
      {icon}
    </button>
  );

  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-gray-300 bg-gray-50">
        {formatButton(<Bold className="w-4 h-4" />, "bold", "Bold (Ctrl+B)")}
        {formatButton(
          <Italic className="w-4 h-4" />,
          "italic",
          "Italic (Ctrl+I)",
        )}
        {formatButton(
          <Underline className="w-4 h-4" />,
          "underline",
          "Underline (Ctrl+U)",
        )}

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {formatButton(
          <List className="w-4 h-4" />,
          "insertUnorderedList",
          "Bullet List",
        )}
        {formatButton(
          <ListOrdered className="w-4 h-4" />,
          "insertOrderedList",
          "Numbered List",
        )}

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {formatButton(
          <AlignLeft className="w-4 h-4" />,
          "justifyLeft",
          "Align Left",
        )}
        {formatButton(
          <AlignCenter className="w-4 h-4" />,
          "justifyCenter",
          "Align Center",
        )}
        {formatButton(
          <AlignRight className="w-4 h-4" />,
          "justifyRight",
          "Align Right",
        )}

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {formatButton(
          <LinkIcon className="w-4 h-4" />,
          "createLink",
          "Insert Link",
        )}

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <select
          onChange={(e) => execCommand("formatBlock", e.target.value)}
          className="px-2 py-1 text-sm border border-gray-300 rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="">
          <option value="">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 focus:outline-none text-gray-900 prose max-w-none"
        style={{ minHeight }}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
        [contenteditable] {
          overflow-y: auto;
        }
        [contenteditable]:focus {
          outline: none;
        }
        /* Styling untuk konten HTML */
        [contenteditable] h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        [contenteditable] h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        [contenteditable] h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        [contenteditable] ul,
        [contenteditable] ol {
          margin: 1em 0;
          padding-left: 2em;
        }
        [contenteditable] a {
          color: #2563eb;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
