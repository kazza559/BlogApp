import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && submit) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSubmit(true);
    }
  };

  const handleChange = event => {
    if (isSubmitting) {
      setErrors(validate(values));
      setSubmit(false);
    }
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
