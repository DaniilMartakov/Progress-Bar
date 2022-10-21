import React, { useState } from 'react';

export default function OneUser({ user: current }) {
  // console.log(user);
  const [flag, setFlag] = useState();
  const [user, setNewUser] = useState(current);
  const [flag2, setFlag2] = useState();
  const [input2, setInput2] = useState('');
  const [add, setAdd] = useState();
  const [button, setButton] = useState('Сменить пароль');
  const [button2, setButton2] = useState('Сменить роль');
  const clickHandler = () => setAdd(!add);
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);
  const select = (e) => setInput2(e.target.value);
  const flagHandler = async () => {
    if (button === 'Сменить пароль') {
      setFlag(!flag);
      setButton('Поменять');
    } else {
      const res = await fetch('/api/v1/password', {
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
  const flagHandler2 = async () => {
    if (button2 === 'Сменить роль') {
      setFlag2(!flag2);
      setButton2('Поменять');
    } else {
      console.log(input2, 123);
      const res = await fetch('/api/v1/role', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: input2, id: user.id }),
      });
      setButton2('Сменить роль');
      setFlag2(!flag2);
      const data = await res.json();
      setNewUser(data);
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
              <p className="card-text" style={{ color: 'black' }}>{user.status ? 'АДМИН' : 'ПОЛЬЗОВАТЕЛЬ'}</p>
              <button onClick={flagHandler} className="btn btn-info" type="button">{button}</button>
              <br />
              <br />
              {flag && (
                <div style={{ marginTop: '5px' }}>
                  <input onChange={changeHandler} name="password" type="text" />
                </div>
              )}
              <br />
              <button onClick={flagHandler2} className="btn btn-info" type="button">{button2}</button>
              <br />
              <br />
                {flag2 && (
                <div style={{ marginTop: '5px' }}>
                  <select onChange={select} name="status" className="custom-select">
                    <option disabled selected>Роль пользователя</option>
                    <option value="1">Админ</option>
                    <option value="0">Пользователь</option>
                  </select>
                </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
