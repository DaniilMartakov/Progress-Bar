import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ user, children }) {
  return (
    <div>
      {user ? children : <h1>Sign in to see more...</h1>}
    </div>
  );
}

export default PrivateRoute;
