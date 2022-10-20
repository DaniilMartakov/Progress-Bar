import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormList from './FormList';

export default function MyLists({ Mycards, user, setMyCards }) {
  useEffect(() => {
    fetch(`/api/v1/all_shablons/${user.id}`)
      .then((res) => res.json())
      .then((data) => setMyCards(data));
  }, []);
  // console.log(Mycards);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', position: 'relative' }}>
      {Mycards?.map((el) => (
        <FormList
          key={el.id}
          el={el}
          user={user}
        />
      ))}
    </div>
  );
}
