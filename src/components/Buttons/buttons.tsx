import React from 'react';

interface BtnProps{
    textColor: string;
    content: string;
    bgColor: string;
    borderColor: string;
    classNames?: string;
    height?: string;
    width?: string;
}

export const Button: React.FC<BtnProps> = ({
  textColor,
  content,
  bgColor,
  borderColor,
  classNames,
  height,
  width,
}) => {
  return (
    <button
      className={`${textColor} ${classNames}`}
      style={{
        background: bgColor,
        borderColor: borderColor,
        borderStyle: "solid",
        borderRadius: "7px",
        padding: "3px 10px",
        fontWeight: 500,
        height: height,
        minWidth: width,
      }}
    >
      {content}
    </button>
  );
};

export const ButtonOutline: React.FC<BtnProps> = ({
  textColor,
  content,
  bgColor,
  borderColor,
  classNames,
  height,
  width,
}) => {
  return (
    <button
      className={`${textColor} ${classNames}`}
      style={{
        background: bgColor,
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "7px",
        padding: "3px 10px",
        fontWeight: 500,
        height: height,
        minWidth: width,
      }}
    >
      {content}
    </button>
  );
};