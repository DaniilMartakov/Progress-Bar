import React, { useState } from 'react';

export default function OneUser({ user }) {
  // console.log(user);
  const [flag, setFlag] = useState();
  const [add, setAdd] = useState();
  const [button, setButton] = useState('Сменить пароль');
  const clickHandler = () => setAdd(!add);
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);
  const flagHandler = () => {
    if (button === 'Сменить пароль') {
      setFlag(!flag);
      setButton('Поменять');
    } else {
      fetch('/api/v1/password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: input, id: user.id }),
      });
      setButton('Сменить пароль');
      setFlag(!flag);
    }
  };
  return (
    <div className="row justify-content-evenly" style={{ width: '100%', marginBottom: '5px' }}>
      <div className="col-3" style={{ width: '100%' }}>
        <div className="card" style={{ background: '-webkit-linear-gradient(left, #6df7be , #32eafe)', width: '100%' }}>
          <h5 style={{ color: 'black' }} onClick={clickHandler} className="card-header">{user.name}</h5>
          {add && (
            <div className="card-body">
              {/* <h5 className="card-title" /> */}
              <p className="card-text" style={{ color: 'black' }}>{user.username}</p>
              <button onClick={flagHandler} className="btn btn-info" type="button">{button}</button>
              {flag && (
                <div style={{ marginTop: '5px' }}>
                  <input onChange={changeHandler} name="password" type="text" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
