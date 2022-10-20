import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Shablone({ info, setInfo }) {
  // console.log(info)
  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    fetch(`/api/v1/one_shablon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        // console.log(info);
      });
  }, []);
  const editStatus = (info,name) => {
    // console.log(name,info)
    info[name]=!info[name]
    fetch(
      `/api/v1/one_shablon/${info.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({info,name}),
      },
    )
      // .then((res) => res.json())
      .then((el) => setInfo(el));
    // setInfo((prev) =>{ //prev.map((el) => {
    //   if (prev.id === id) {
    //     prev.status = !prev.status;
    //     return prev;
    //   }
    //   return prev;
    // });
  };
  // console.log(info);
  return (
    <div
      className="containercolor"
      style={{
        textAlign: 'start', margin: '10%', padding: '5%', color: 'black', fontSize: '20px',
      }}
    >
      <p>
        Привет,

        {info?.name}
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
      {info?.User.name}
      . Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.

      <p>Нужно подготовить твое рабочее место:</p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" onChange={(e) => editStatus(info,e.target.name)} name="q1" value="" defaultChecked={info.q1}/>
          {' '}
          Наставник выдал мне пропуск
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q2" onChange={(e) => editStatus(info,e.target.name)} defaultChecked={info.q2}/>
          {' '}
          Наставник сообщил пароль от Wi-Fi
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q3" onChange={(e) => editStatus(info,e.target.name)} defaultChecked={info.q1}/>
          {' '}
          Системный администратор выдал мне ноутбук
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q4" onChange={(e) => editStatus(info,e.target.name)} defaultChecked={info.q4}/>
          {' '}
          Системный администратор выдал мне доступы к почте
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q5" onChange={(e) => editStatus(info,e.target.name)}  defaultChecked={info.q5}/>
          {' '}
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
        </li>
      </ul>

      <p>
        Важно познакомиться с коллегами:

      </p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q6" value="" />
          {' '}
          Ты познакомился (-ась) со своим руководителем
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q7" value="" />
          {' '}
          Ты написал(-а) сообщение в командный чат
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q8" value="" />
          {' '}
          Напиши имена трех твоих коллег по отделу: ____________
        </li>
      </ul>

      <p>
        Важно пройти оформление в отделе кадров:

      </p>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q9" value="" />
          {' '}
          Ты отправил (-а)  сканды документы на оформление в отдел кадров
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q10" value="" />
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
          <input type="checkbox" name="q11" value="" />
          {' '}
          Получи свою первую задачу у руководителя
        </li>
        <li style={{ listStyleType: 'none' }}>
          <input type="checkbox" name="q12" value="" />
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
      <button type="submit">bla</button>
    </div>
  );
}
