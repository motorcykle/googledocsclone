import Head from 'next/head'
import Header from '../components/Header';
import { useEffect } from 'react';
import Login from '../components/Login';
import { getSession } from 'next-auth/client';
import { Button, IconButton } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Image from 'next/image';

export default function Home({ session }) {
  
  if (!session) return <Login />

  // useEffect(() => {
  //   const unsub = db
  //     .collection('userDocs')
  //     .doc(session?.user.email)
  //     .collection('docs')
  //     .get().then(shit => shit.docs.forEach(doc => console.log(doc.id)))
      

  //   return unsub
  // }, [])

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F0F3F4] py-5 text-gray-600 px-5 md:px-0">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-center">
            <p>Start a new document</p>

            <div className="newDoc-btns flex items-center space-x-2">
              <Button>
                Template gallery
                <UnfoldMoreIcon />
              </Button>
              <div className="border-l h-7 bg-gray-600 border-gray-300"></div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>

          <div className="">

            <div className="">
              <div className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden">
                <Image src={"https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"} layout="fill" />
              </div>
              <p className="ml-2 mt-2 text-sm">Blank</p>
            </div>

          </div>


        </div>
      </section>

      <section className="py-5 text-gray-600 px-5 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date created</p>
            <FolderOpenIcon />
          </div>

          {/* {snapshot?.docs?.map(doc => (
            <DocumentRow
              key={doc.id}
              doc={{ ...doc.data(), id: doc.id }}
            />
          ))} */}

        </div>
      </section>

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {session}
  }
}