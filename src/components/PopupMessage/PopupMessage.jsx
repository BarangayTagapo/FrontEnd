import React, { useEffect } from 'react';
import './popup-message.css';
import { useSelector, useDispatch } from 'react-redux';

const PopupMessage = ({ type, message, removePopup }) => {
  const popup = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => dispatch(removePopup()), 5000);
    return () => clearTimeout(timeout);
  }, [popup, removePopup, dispatch]);

  if (typeof message === 'object') {
    message = message.map((item, index) => <p key={index}>{item}</p>);
  }

  return <div className={`popup popup-${type}`}>{message}</div>;
};

export default PopupMessage;
