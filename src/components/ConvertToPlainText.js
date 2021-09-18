import { ContentState, convertFromHTML, Editor, EditorState } from "draft-js";
import React from "react";

export default function ConvertToPlainText({ html }) {
  const blocksFromHTML = convertFromHTML(html);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const plainText = EditorState.createWithContent(state);

  return <Editor editorState={plainText} />;
}
