import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormList from './FormList';

export default function MyLists({ Mycards, user, setMyCards }) {
  useEffect(() => {
    fetch(`/api/v1/all_shablons/${user.id}`)
      .then((res) => res.json())
      .then((data) => setMyCards(data));
  }, []);
  // console.log(Mycards);
  return (
    <>
      <Link rel="stylesheet" className="btn btn-info" to="/new">
        {' '}
        Создать новое
      </Link>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', position: 'relative', flexWrap: "wrap", }}>
        {Mycards?.map((el) => (
          <FormList
            key={el.id}
            el={el}
            user={user}
          />
        ))}
      </div>
    </>
  );
}
