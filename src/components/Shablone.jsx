import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Shablone({ info, setInfo }) {
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/v1/one_shablon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);
  const editStatus = async (info, name) => {
    // console.log(name, info[name]);
    info[name] = !info[name];
    // console.log(name, info[name]);
    const response = await fetch(
      `/api/v1/one_shablon/${info.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ info, name }),
      },
    );
    const data = await response.json();
    setInfo(data);
  };
  return (
    <div
      className="containercolor"
      style={{
        textAlign: 'start', margin: '10%', padding: '5%', color: 'black', fontSize: '20px',
      }}
    >
      <p>
        Привет,
        {' '}
        {info?.name}
        !
        {' '}
        <br />
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

      </p>

      <p>Нужно подготовить твое рабочее место:</p>
      <ul>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" onChange={(e) => editStatus(info, e.target.name)} name="q1" value="" defaultChecked={info.q1} />
          {' '}
          Наставник выдал мне пропуск
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="q2" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q2} />
          {' '}
          Наставник сообщил пароль от Wi-Fi
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="q3" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q3} />
          {' '}
          Системный администратор выдал мне ноутбук
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="q4" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q4} />
          {' '}
          Системный администратор выдал мне доступы к почте
        </li>
        <li style={{ 'list-style-type': 'none' }}>
          <input type="checkbox" name="q5" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q5} />
          {' '}
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
        </li>
      </ul>

      <p>
        Важно познакомиться с коллегами:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q6" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q6} />
            {' '}
            Ты познакомился (-ась) со своим руководителем
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q7" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q7} />
            {' '}
            Ты написал(-а) сообщение в командный чат
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q8" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q8} />
            {' '}
            Напиши имена трех твоих коллег по отделу: ____________
          </li>
        </ul>
      </p>

      <p>
        Важно пройти оформление в отделе кадров:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q9" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q9} />
            {' '}
            Ты отправил (-а)  сканды документы на оформление в отдел кадров
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q10" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q10} />
            {' '}
            Ты подписал (-а) соглашение о коммерческой тайне
          </li>
        </ul>
      </p>
      <p>
        А теперь самое время работать:
        <ul>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q11" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q11} />
            {' '}
            Получи свою первую задачу у руководителя
          </li>
          <li style={{ 'list-style-type': 'none' }}>
            <input type="checkbox" name="q12" value="" onChange={(e) => editStatus(info, e.target.name)} defaultChecked={info.q12} />
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
        {info?.team}
        {' '}
        💚

      </p>
      {/* <button type="submit">bla</button> */}
    </div>
  );
}
