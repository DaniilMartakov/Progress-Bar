import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({
  name, setUser, user, setAllUser, allUser,
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
      <div className="container-fluid d-flex justify-content-between w-100">
        <a className="navbar-brand" href="/list/all"><img src="/images/mountain.png" alt="logo" width="60px" height="40px" /></a>
        <span className="navbar-brand"><h1 style={{ color: 'white' }}>{name}</h1></span>
        <div>
          <ul className="navbar-nav to-right ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/list/all">Все листы</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/list/my/:id">Мои листки</Link>
            </li>
            {user.id === 1 && (
            <li className="nav-item">
              <Link  className="nav-link active" aria-current="page" to="/users">Пользователи</Link>
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
