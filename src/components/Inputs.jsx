import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function New({ setInputs }) {
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHAndler = (e) => {
    e.preventDefault();
    // fetch('/api/v1/entries', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(navigate('/'));
    navigate('/shablone');
  };

  return (
  // <>
  //   <h1>Создание нового шаблона</h1>

  //   <form onSubmit={submitHAndler}>
  //     <label htmlFor="title-input" className="block mar-b-1">ФИ сотрудника, которому предназначен опросник:</label>
  //     <input
  //       onChange={inputHandler}
  //       // value={data.title || ''}
  //       name="nameOfTarget"
  //       type="text"
  //     />

  //     <label htmlFor="body-textarea" className="block mar-b-1">Название команды:</label>
  //     <input
  //       onChange={inputHandler}
  //       // value={data.title || ''}
  //       name="nameOfTeam"
  //       type="text"
  //     />

  //     <label htmlFor="body-textarea" className="block mar-b-1">ФИ проводника:</label>
  //     <input
  //       onChange={inputHandler}
  //       // value={data.title || ''}
  //       name="nameOfCouch"
  //       type="text"
  //     />
  //     <label htmlFor="body-textarea" className="block mar-b-1">Еще какой-то текст:</label>
  //     <input
  //       onChange={inputHandler}
  //       // value={data.title || ''}
  //       name="nameOfSome"
  //       type="text"
  //     />
  //     <button type="submit">next</button>
  //   </form>
  // </>

    <div className="register-form">
      <div className="form">
        <form onSubmit={submitHAndler}>
          <label htmlFor="usr">
            <p className="label-txt"><h5>ФИ сотрудника:</h5></p>
            <input
              onChange={inputHandler}
          // value={data.title || ''}
              name="nameOfTarget"
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
              onChange={inputHandler}
          // value={data.title || ''}
              name="nameOfTarget"
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
              onChange={inputHandler}
          // value={data.title || ''}
              name="nameOfTarget"
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
              onChange={inputHandler}
          // value={data.title || ''}
              name="nameOfTarget"
              type="text"
              className="input"
              id="usr"
            />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <br />

          {/* <label htmlFor="pw">
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
        <br /> */}
          <button type="submit" className="btn btn-outline-info btn-lg" style={{ width: '10rem' }}>LOGIN</button>
        </form>
      </div>
    </div>

  );
}
