import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const togglePassword = (): [string, JSX.Element] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisibility] = useState(false);

  const Icon = visible ? (
    <BsEyeSlash onClick={() => setVisibility((visibility) => !visibility)} />
  ) : (
    <BsEye onClick={() => setVisibility((visibility) => !visibility)} /> 
  );
  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default togglePassword;
