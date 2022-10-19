import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function New({ inputs }) {
  //   const inputHandler = (e) => {
  //     setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  //   const submitHAndler = (e) => {
  //     e.preventDefault();

  //     if (inputs.nameOfTarget && inputs.nameOfTeam && inputs.nameOfCouch && inputs.nameOfSome) {
  //       fetch('/', {
  //         method: 'POST',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify(inputs),
  //       })
  //         .then(navigate('/'));
  //     }
  //   };

  return (
    <div>
      <p>
        Привет,
        {' '}
        {inputs.name}
        !
        {' '}
        <br />
        И добро пожаловать в команду
        {' '}
        {inputs.nameOfTeam}
        !
        {' '}
        <br />
        Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет-
        {' '}
        {inputs.nameOfCouch}
        {' '}
        <br />
        Мы подготовили для тебя
        {' '}
        {inputs.nameOfSome}
        . Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.

      </p>

      <p>Нужно подготовить твое рабочее место:</p>
      <ul>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Наставник выдал мне пропуск
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Наставник сообщил пароль от Wi-Fi
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Системный администратор выдал мне ноутбук
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Системный администратор выдал мне доступы к почте
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
        </li>
      </ul>

      <p>
        Важно познакомиться с коллегами:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Ты познакомился (-ась) со своим руководителем
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Ты написал(-а) сообщение в командный чат
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Напиши имена трех твоих коллег по отделу: ____________
          </li>
        </ul>
      </p>

      <p>
        Важно пройти оформление в отделе кадров:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Ты отправил (-а)  сканды документы на оформление в отдел кадров
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Ты подписал (-а) соглашение о коммерческой тайне
          </li>
        </ul>
      </p>
      <p>
        А теперь самое время работать:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Получи свою первую задачу у руководителя
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="name" value="" />
            {' '}
            Создай подпись в почте по корпоративному шаблону
          </li>
        </ul>

      </p>
      <p>
        Классного путешествия!
        {' '}
        <br />
        Команда
        {' '}
        {inputs.nameOfTeam}
        {' '}
        💚

      </p>

    </div>
  );
}
