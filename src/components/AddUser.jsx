import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddUser({ setAllUser }) {
  // const navigate = useNavigate();
  const [add, setAdd] = useState(null);
  const [error, setError] = useState('');
  const clickHandler = () => setAdd(!add);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.status === 200) {
        // console.log(data);
        setAllUser((prev) => [...prev, data.newUser]);
        setAdd(!add);
      } else {
        setError(data.message);
      }
    }
  };
  return (
    <div className="row justify-content-evenly" style={{ width: '400px', marginBottom: '5px' }}>
      <div className="col-3" style={{ width: '400px' }}>
        <div className="card" style={{ background: '-webkit-linear-gradient(left, #6DF7BE -10%, #32EAFE)', width: '400px' }}>
          <h5 style={{ color: 'black' }} onClick={clickHandler} className="card-header">Добавить Пользователя</h5>
          {add && (
            <form onSubmit={handleSubmit} style={{ padding: '0', background: 'none' }}>
              <div style={{ color: 'red' }}>{error}</div>
              <div className="card-body">
                <p className="card-text" style={{ color: 'black', boxShadow: 'none', WebkitBoxShadow: 'none' }}>Name</p>
                <input type="text" name="name" />
                <p className="card-text" style={{ color: 'black' }}>Email</p>
                <input type="text" name="username" />
                <p className="card-text" style={{ color: 'black' }}>Password</p>
                <input type="text" name="password" />
                <br />
                <br />
                <select name="status" className="custom-select">
                  <option disabled selected>Роль пользователя</option>
                  <option value="1">Админ</option>
                  <option value="0">Пользователь</option>
                </select>
                <br />
                <br />
                <button className="btn btn-outline-info" type="submit">Добавить</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
