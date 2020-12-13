const useForm = (submitFormFn) => {
  const onSubmit = (e) => {
    //prevent form from submitting
    e.preventDefault();

    submitFormFn();
  };

  return [onSubmit];
};

export default useForm;
