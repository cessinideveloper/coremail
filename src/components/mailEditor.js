import React, { useRef } from 'react';
import "./firstWindow.css"
import EmailEditor from 'react-email-editor';

function MailEditor() {

  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log(design);
    });
  };
  return (
    <React.Fragment>
        <div className="editorWindow">
            <button onClick={exportHtml} ></button>
            <EmailEditor ref={emailEditorRef}></EmailEditor>
        </div>
    </React.Fragment>
  );

}

export default MailEditor;