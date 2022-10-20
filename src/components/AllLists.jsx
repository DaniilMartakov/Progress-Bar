import React, { useState } from 'react';
import FormList from './FormList';

export default function AllLists({ allLists, user }) {
  const [cards, setCards] = useState(allLists || []);
  const a = 0;
  // cards.map((e) => {
  //   if (e === true) {
  //     a += 1;
  //   }
  // });
  // const b = ((a / 11) * 100).toFixed();
  // console.log(b);
  return (
    <div>
      { cards?.map((el) => (
        <FormList
          key={el.id}
          el={el}
          user={user}
          // b={b}
        />
      ))}

    </div>
  );
}
