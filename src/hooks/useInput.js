import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onHandleChange, reset];
};

export default useInput;
