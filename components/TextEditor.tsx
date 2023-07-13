import React from 'react';
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import "./custom-quill.css"

const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false }
);

const TextEditor = () => {
  return (
    <div>
      <ReactQuill />
    </div>
  )
}

export default TextEditor