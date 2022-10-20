import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validPassword from '../utils/validpassword';

function LogIn({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(true);
  const [input, setInput] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(Object.fromEntries(new FormData(e.target)));
    const response = await fetch('/api/v1/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === 200) {
        setUser(data);
        navigate('/homepage');
      } else {
        setError(data.message);
      }
    }
  };

  const showPassword = () => setFlag(!flag);
  const passHandler = (e) => setInput(e.target.value);

  return (
    <div className="register-form">
      <div className="form">
        <form onSubmit={submitHandler}>
          <label htmlFor="usr">
            <p className="label-txt">WRITE YOUR USERNAME</p>
            <input name="username" type="email" className="input" id="usr" />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />
          <label htmlFor="pw">
            <p className="label-txt">WRITE YOUR PASSWORD</p>
            <input name="password" onChange={passHandler} type={flag ? 'password' : 'text'} style={{ color: validPassword(input) ? 'green' : 'red' }} className="input" id="pw" />
            <div className="line-box">
              <div className="line" />
            </div>
            <div className="mb-3 form-check box d-flex">
              <input onClick={showPassword} type="checkbox" id="exampleCheck1" />
              <label className="form-check-label check" htmlFor="exampleCheck1">Show password</label>
            </div>
          </label>
          <br />
          <div style={{ color: 'red' }}>{error}</div>
          <br />
          <button type="submit" className="btn btn-outline-info btn-lg" style={{ width: '10rem' }}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
