import React from 'react';
import style from './profileContent.module.css';

interface Props {
    component: React.ReactNode;
    reference?: any;
}
export default function FormWrapper({ component, reference }: Props) {
  return (
    <div className={style.formWrapper} ref={reference}>
      {component}
    </div>
  );
}