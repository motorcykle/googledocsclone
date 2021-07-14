import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import db from '../firebase';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(module => module.Editor), {
  ssr: false,
})

const TextEditor = ({ doc }) => {
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection('userDocs').doc(session?.user.email).collection('docs').doc(id).set({
      editorState: convertToRaw(editorState.getCurrentContent())
    }, {
      merge: true
    })
  }

  useEffect(() => {
    if (doc?.editorState) {
      setEditorState(EditorState.createWithContent(convertFromRaw(doc?.editorState)))
    }
  }, [doc]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-1">
      <Editor
        editorState={editorState}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="bg-white shadow-lg max-w-5xl mx-auto border p-10 min-h-screen my-6"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

export default TextEditor;
