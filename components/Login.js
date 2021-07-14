import { Button } from '@material-ui/core';
import { signIn } from 'next-auth/client';
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen">
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
