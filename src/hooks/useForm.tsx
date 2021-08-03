import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const handleError = (e: any) => {
    if (e.target.name === "email" && !pattern.test(e.target.value)) {
      return true;
    }
  };

  return [
    values,
    (e: { target: { name: any; value: any } }) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        emailError: handleError(e),
      });
    },
  ];
};
