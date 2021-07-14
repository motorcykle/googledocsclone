import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client';
import db from '../../firebase';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import TextEditor from '../../components/TextEditor';
import { Button } from '@material-ui/core';
import Loader from "react-loader-spinner";

const Doc = ({ session }) => {
  const router = useRouter();
  const { id } = router.query;
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    if (!session) return;
    
    db
      .collection('userDocs')
      .doc(session?.user.email)
      .collection('docs')
      .doc(id)
      .get()
      .then(data => {
        if (data.data()) {
          setDoc({ ...data.data() })
        } else {
          router.replace('/')
        }
      })
      .catch(err => aler(err))

  }, [id, session]);

  return (
    <div>
      <header className="flex justify-between items-center p-3">
        <span onClick={() => router.push('/')} className="cursor-pointer text-5xl text-[#2196f3] grid place-items-center">
          <DescriptionIcon fontSize="inherit" />
        </span>

        <div className="flex-grow px-2">
          <h2 className="text-gray-600">
            {doc?.fileName}
          </h2>
          <div className="flex items-center text-sm space-x-2 -ml-1 h-8 text-gray-500">
            <p className="">File</p>
            <p className="">Edit</p>
            <p className="">View</p>
            <p className="">Insert</p>
            <p className="">Format</p>
            <p className="">Tools</p>
          </div>
        </div>

        <div className="idRight hidden md:inline-flex items-center">
          <Button>
            <PeopleIcon /> SHARE
          </Button>
          <img src={session?.user.image} className="rounded-full h-10 w-10 ml-2" alt="" />
        </div>
      </header>

      {doc && <TextEditor doc={doc} />}
    </div>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {session}
  }
}