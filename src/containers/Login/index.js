import React from 'react'
import {Link} from 'react-router-dom';

function LoginContainer() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/auth/register">register</Link>

    </div>
  )
}

export default LoginContainer