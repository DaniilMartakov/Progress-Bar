import React, { useState } from 'react';

export default function AddUser({ setAllUser }) {
  // const navigate = useNavigate();
  const [add, setAdd] = useState(null);
  const clickHandler = () => setAdd(!add);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdd(!add);
    const response = await fetch('/api/v1/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setAllUser((prev) => [...prev, data]);
    }
  };
  return (
    <div className="row justify-content-evenly" style={{ width: '400px', 'margin-bottom': '5px' }}>
      <div className="col-3" style={{ width: '400px' }}>
        <div className="card" style={{ width: '400px' }}>
          <h5 style={{ color: 'black' }} onClick={clickHandler} className="card-header">Добавить Пользователя</h5>
          {add && (
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <p className="card-text" style={{ color: 'black' }}>Name</p>
                <input type="text" name="name" />
                <p className="card-text" style={{ color: 'black' }}>Email</p>
                <input type="text" name="username" />
                <p className="card-text" style={{ color: 'black' }}>Password</p>
                <input type="text" name="password" />
                <button type="submit">Добавить</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
