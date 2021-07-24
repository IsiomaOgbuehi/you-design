import React from 'react';
import style from './profileContent.module.css';

interface Props {
    component: React.ReactNode
}
export default function FormWrapper({ component }: Props) {
  return <div className={style.formWrapper}>{component}</div>;
}