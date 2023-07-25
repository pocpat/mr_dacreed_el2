import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TextEditorProps {
  content: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ content }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(content);
  }, [content]);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ];
  const editorModule = {
    toolbar: toolbarOptions,
  };
  return (
    <div>
      <h2 className="bg-primary-content font-bold text-neutral-500">
        text edditor
      </h2>
      <ReactQuill modules={editorModule} theme="snow" value={value} />
      <style jsx>{`
        /* Apply styles to the code blocks in the Quill editor */
        .ql-snow .ql-editor pre.ql-syntax {
          @apply bg-blue-900 text-white; // Tailwind utility classes for background color and text color
          overflow: visible;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
