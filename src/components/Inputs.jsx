import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function New({ setInputs }) {
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHAndler = (e) => {
    // e.preventDefault();
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
    <>
      <h1>Создание нового шаблона</h1>

      <form onSubmit={submitHAndler}>
        <label htmlFor="title-input" className="block mar-b-1">ФИ сотрудника, которому предназначен опросник:</label>
        <input
          onChange={inputHandler}
          // value={data.title || ''}
          name="nameOfTarget"
          type="text"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">Название команды:</label>
        <input
          onChange={inputHandler}
          // value={data.title || ''}
          name="nameOfTeam"
          type="text"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">ФИ проводника:</label>
        <input
          onChange={inputHandler}
          // value={data.title || ''}
          name="nameOfCouch"
          type="text"
        />
        <label htmlFor="body-textarea" className="block mar-b-1">Еще какой-то текст:</label>
        <input
          onChange={inputHandler}
          // value={data.title || ''}
          name="nameOfSome"
          type="text"
        />
        <button type="submit">next</button>
      </form>
    </>
  );
}
