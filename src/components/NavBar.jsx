import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({
  logo, name, setUser, user,
}) {
  const navigate = useNavigate();
  const clickHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/logOut');
    if (response.ok) {
      setUser(null);
      navigate('/homepage');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark theme">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{logo}</a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <h1>{name}</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Home</Link>
              <Link className="nav-link active" aria-current="page" to="/list/all">all</Link>
              <Link className="nav-link active" aria-current="page" to="/list/my/:id">my</Link>
            </li>
            {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/logIn">LogIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signUp">SignUp</Link>
              </li>
            </>
            )}
            {user && (
              <li className="nav-item">
                <Link onClick={clickHandler} className="nav-link active" aria-current="page" to="/">LogOut</Link>
              </li>
            )}
          </ul>
          {/* <h4 className="navbar-brand">{categoryName}</h4> */}
        </div>
      </div>
      {/* <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
      </div> */}
    </nav>
  );
}
