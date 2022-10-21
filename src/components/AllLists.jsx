import React, { useEffect, useState } from 'react';
import FormList from './FormList';

export default function AllLists({
  cards, user, setCards,
}) {
  useEffect(() => {
    fetch('/api/v1/all_shablons')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, '1');
        setCards(data);
        // console.log(data, '2');
      });
  }, []);
  // console.log(cards, '3');
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-evenly', position: 'relative', flexWrap: 'wrap',
    }}
    >
      { cards?.map((el) => (
        <FormList
          key={el.id}
          el={el}
          user={user}
        />
      ))}

    </div>
  );
}
