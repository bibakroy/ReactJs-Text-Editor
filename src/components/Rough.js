import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../style/Editor.module.css";
import ConvertToPlainText from "./ConvertToPlainText";

export default function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [html, setHtml] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const onHTMLChange = (event) => {
    setHtml(event.target.value);
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
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <h2>Imput you HTML below to get plaintext as output</h2>
        <div>
          <input
            className={classes.inputHTML}
            placeholder=" Put your HTML here to get a plaintext below..."
            value={html}
            onChange={onHTMLChange}
          />
          <div className={classes.plainText}>
            <ConvertToPlainText html={html} />
          </div>
        </div>
      </div>
    </>
  );
  //   <h1><em><ins>Hello</ins></em></h1>
  // <ol>
  // <li><sup><strong>World </strong></sup></li>
  // </ol>
  // <ul>
  // <li>Hello&nbsp;&nbsp;&nbsp;&nbsp;</li>
  // </ul>
  // <p>World    !</p>
}
