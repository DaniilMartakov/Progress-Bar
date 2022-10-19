import React from 'react';
// import mountain from 'public/images/mountain.png';

export default function HomePage({ message }) {
  return (
    <>
      <div>{message}</div>
      <img src="images/mountain.png" alt="logo" />
    </>
  );
}
