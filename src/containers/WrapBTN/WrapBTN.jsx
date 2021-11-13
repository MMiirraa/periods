import React from 'react';
import Button from '../../components/Button/Button';
import './WrapBTN.css';

function WrapBTN(props) {
  return (
    <div className="container-btn">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default WrapBTN;
