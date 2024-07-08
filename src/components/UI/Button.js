import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test','hbtn--primary'];

const SIZES = ['btn--medium', 'btn--large','btn--small','hbtn--large','hbtn--small'];

export const Button = ({
  children,
  path,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  target,
  htmltype
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={path} target={target} className='btn-mobile'>
      <button
        className={`hbtn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        target={target}
        htmlType={htmltype}
      >
        {children}
      </button>
    </Link>
  );
};