import { convertToRaw, EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../style/Editor.module.css";

const rawHTML = stateFromHTML(`    <h1><em><ins>Hello</ins></em></h1>
<ol>
<li><sup><strong>World </strong></sup></li>
</ol>
<ul>
<li>Hello&nbsp;&nbsp;&nbsp;&nbsp;</li>
</ul>
<p>World    !</p>`);

export default function TextEditor() {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(rawHTML)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      <div className={classes.editor}>
        <h1>TEXT EDITOR</h1>
        <Editor
          placeholder=" Write yor text here and edit..."
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        <textarea
          className={classes.outputHTML}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
      </div>
    </>
  );
}
