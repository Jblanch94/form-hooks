import React, { useEffect, useRef } from 'react';

import useInput from './hooks/useInput';
import useForm from './hooks/useForm';

const Login = () => {
  //useInput hooks for form fields
  const [firstName, onFirstNameChange, firstNameReset] = useInput('');
  const [lastName, onLastNameChange, lastNameReset] = useInput('');
  const [email, onEmailChange, emailReset] = useInput('');
  const [password1, onPassword1Change, password1Reset] = useInput('');
  const [password2, onPassword2Change, password2Reset] = useInput('');

  const firstNameInput = useRef(null);

  //useForm hook for the form
  const [onFormSubmit] = useForm(onSubmit);

  function onSubmit() {
    console.log('First Name', firstName);
    console.log('Last Name', lastName);
    console.log('email', email);
    console.log('Password', password1);
    console.log('Password', password2);
  }

  function onFormReset(e) {
    e.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
    password1Reset();
    password2Reset();
  }

  useEffect(() => {
    console.log(firstNameInput);
    firstNameInput.current.focus();
  }, []);

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label id="first_name">First Name </label>
        <input
          ref={firstNameInput}
          value={firstName}
          onChange={onFirstNameChange}
          htmlFor="first_name"
          id="first_name"
          name="first_name"
          type="text"
        />
      </div>
      <div>
        <label id="last_name">Last Name </label>
        <input
          value={lastName}
          onChange={onLastNameChange}
          htmlFor="last_name"
          id="last_name"
          name="last_name"
          type="text"
        />
      </div>
      <div>
        <label id="email">Email </label>
        <input
          htmlFor="email"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div>
        <label id="password_1">Password </label>
        <input
          htmlFor="password_1"
          id="password_1"
          name="password_1"
          type="password"
          value={password1}
          onChange={onPassword1Change}
        />
      </div>
      <div>
        <label id="password_2">Re-enter Password </label>
        <input
          htmlFor="password_2"
          id="password_2"
          name="password_2"
          type="password"
          value={password2}
          onChange={onPassword2Change}
        />
      </div>
      <div>
        <button>Submit</button>
        <button onClick={onFormReset}>Reset</button>
      </div>
    </form>
  );
};

export default Login;
