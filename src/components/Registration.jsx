import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validPassword from '../utils/validpassword';
// import validUsername from '../utils/validUsername';

function Registration({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(true);
  const [input, setInput] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/signUp', {
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
    <div>
      <h1>Sign Up</h1>
      <div style={{ color: 'red' }}>{error}</div>
      <br />
      
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={passHandler} value={input} name="password" type={flag ? 'password' : 'text'} style={{ color: validPassword(input) ? 'green' : 'red' }} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input onClick={showPassword} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
