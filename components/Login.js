import { signIn } from 'next-auth/client';
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="overflow-hidden w-40 h-auto mb-4">
        <img className="object-cover" src="https://www.pngkey.com/png/full/206-2061772_google-docs-icon-google-docs-logo-png.png" alt="" />
      </div>
      <button onClick={signIn} className="py-2 w-44 shadow-md hover:animate-pulse text-gray-100 rounded-md bg-[#2196f3]">Sign In</button>
    </div>
  );
}

export default Login;
