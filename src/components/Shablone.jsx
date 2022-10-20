import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Shablone({ info, setInfo }) {
  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    fetch(`/api/v1/one_shablon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        console.log(info);
      });
  }, []);
  // console.log(info);
  return (
    <div
      className="containercolor"
      style={{
        textAlign: 'start', margin: '10%', padding: '5%', color: 'black', fontSize: '20px',
      }}
    >
      <p>
        Привет, {info?.name}
        !
      </p>
      И добро пожаловать в команду
      {' '}
      {info?.team}
      !
      {' '}
      <br />
      Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет-
      {' '}
      {info?.coach}
      {' '}
      <br />
      Мы подготовили для тебя
      {' '}
      {info?.target}
      . Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.

      <p>Нужно подготовить твое рабочее место:</p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Наставник выдал мне пропуск
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Наставник сообщил пароль от Wi-Fi
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Системный администратор выдал мне ноутбук
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Системный администратор выдал мне доступы к почте
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
        </li>
      </ul>

      <p>
        Важно познакомиться с коллегами:

      </p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты познакомился (-ась) со своим руководителем
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты написал(-а) сообщение в командный чат
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Напиши имена трех твоих коллег по отделу: ____________
        </li>
      </ul>

      <p>
        Важно пройти оформление в отделе кадров:

      </p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты отправил (-а)  сканды документы на оформление в отдел кадров
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Ты подписал (-а) соглашение о коммерческой тайне
        </li>
      </ul>

      <p>
        А теперь самое время работать:
        {' '}

      </p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Получи свою первую задачу у руководителя
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="name" value="" />
          {' '}
          Создай подпись в почте по корпоративному шаблону
        </li>
      </ul>

      <p>
        Классного путешествия!
        {' '}
        <br />
        Команда
        {' '}
        {info?.team}
        {' '}
        💚

      </p>

    </div>
  );
}
