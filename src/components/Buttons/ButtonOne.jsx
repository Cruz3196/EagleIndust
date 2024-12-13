import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonOne.css';

const ButtonOne = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Safety');
  };

  return (
    <div className='ButtonOne-Container'>
        <button onClick={handleClick} className='ButtonOne'>
          OUR COMMITMENT TO SAFETY
        </button>
    </div>
  )
}

export default ButtonOne;