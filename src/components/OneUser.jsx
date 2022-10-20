import React, { useState } from 'react';

export default function OneUser({ user }) {
  // console.log(user);
  const [add, setAdd] = useState();
  const clickHandler = () => setAdd(!add);
  return (
    <div className="row justify-content-evenly" style={{ width: '100%', 'margin-bottom': '5px' }}>
      <div className="col-3" style={{ width: '100%' }}>
        <div className="card" style={{ width: '100%' }}>
          <h5 style={{ color: 'black' }} onClick={clickHandler} className="card-header">{user.name}</h5>
          {add && (
            <div className="card-body">
              {/* <h5 className="card-title" /> */}
              <p className="card-text" style={{ color: 'black' }}>{user.username}</p>
              <input type="text" />
              <button type="button">Сменить пароль</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
