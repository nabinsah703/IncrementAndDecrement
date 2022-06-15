import React from 'react';
import "./style.css";
import { useState } from 'react';
const UseState = () => {
    const [myNumber, setMyNumber] = useState(0);

  return (
    <div className='center-div'>
        <p>{myNumber}</p>
        <div className='button2' onClick={() => setMyNumber(myNumber +1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
        </div>
        <div className='button2' onClick= {() => myNumber>(myNumber > 0) ? setMyNumber(myNumber -1) : setMyNumber(0)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
        </div>
    </div>
  )
}

export default UseState;