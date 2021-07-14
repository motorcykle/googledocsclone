import Head from 'next/head'
import Header from '../components/Header';
import { useEffect } from 'react';
import Login from '../components/Login';
import { getSession } from 'next-auth/client';

export default function Home({ session }) {
  
  if (!session) return <Login />

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {session}
  }
}