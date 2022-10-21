import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ user, children }) {
  return (
    <div>
      {!user ? children : <Navigate to="/homepage" />}
    </div>
  );
}

export default PrivateRoute;
