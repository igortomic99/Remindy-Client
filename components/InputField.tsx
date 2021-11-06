import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';

interface Values {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

export const InputField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props as any);
  return (
    <>
        <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};