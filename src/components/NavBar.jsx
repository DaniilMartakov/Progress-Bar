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
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark theme at-right">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="images/mountain.png" alt="logo" width="60px" height="40px" /></a>
        <h1 style={{ color: 'white' }}>{name}</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav to-right ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Все листы</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Мои листки</Link>
            </li>
            {user.id === 1 && (
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Пользователи</Link>
            </li>
            )}
            <li className="nav-item">
              <Link onClick={clickHandler} className="nav-link active" aria-current="page" to="/">LogOut</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
