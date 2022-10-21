import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inputs({ user }) {
  const navigate = useNavigate();

  // const inputHandler = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value, user_id: user?.id }));
  // };

  const submitHAndler = async (e) => {
    e.preventDefault();
    const input = { ...Object.fromEntries(new FormData(e.target)), user_id: user?.id };
    console.log(user);
    if (input.name === '' || input.team === '' || input.coach === '' || input.target === '') {
      alert('Заполни');
    } else {
      const response = await fetch('/api/v1/createshablon', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      // console.log(data.id);
      navigate(`/one_shablon/${data.id}`);
      // navigate();
    }
  };

  return (

    <div className="register-form">
      <div className="form">
        <form onSubmit={submitHAndler}>
          <label htmlFor="usr">
            <p className="label-txt"><h5>ФИ сотрудника:</h5></p>
            <input
              // onChange={inputHandler}
              // value={data.title || ''}
              // value
              name="name"
              type="text"
              className="input"
              id="usr"
            />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />
          <label htmlFor="usr">
            <p className="label-txt"><h5>НАЗВАНИЕ КОМАНДЫ:</h5></p>
            <input
              // onChange={inputHandler}
              // value={data.title || ''}
              name="team"
              type="text"
              className="input"
              id="usr"
            />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />
          <label htmlFor="usr">
            <p className="label-txt"><h5>ФИ ПРОВОДНИКА:</h5></p>
            <input
              // onChange={inputHandler}
              // value={data.title || ''}
              name="coach"
              type="text"
              className="input"
              id="usr"
            />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />
          <label htmlFor="usr">
            <p className="label-txt"><h5>ЦЕЛЬ ШАБЛОНА:</h5></p>
            <input
              // onChange={inputHandler}
              // value={data.title || ''}
              name="target"
              type="text"
              className="input"
              id="usr"
            />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />
          <button type="submit" className="btn btn-outline-info btn-lg" style={{ width: '10rem' }}>СОЗДАТЬ</button>
        </form>
      </div>
    </div>

  );
}
