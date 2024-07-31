'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Form.module.css';

export default function Form() {
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [fnameError, setFnameError] = useState<string>('');
  const [lnameError, setLnameError] = useState<string>('');
  const [mailError, setMailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const errorStyles = {
    border: '1px solid rgba(234, 56, 31,1)',
    backgroundImage: 'url(/images/icon-error.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '95% 50%',
  };

  const normalStyles = {
    border: '3px solid hsl(246, 25%, 77%)',
    backgroundImage: 'none',
    color: 'black',
  };

  const handleFnameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value);
  };
  const handleLnameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setLname(event.target.value);
  };
  const handleMailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mail) {
      setMailError('Email cannot be empty');
    } else if (!validateEmail(mail)) {
      setMailError('Email address is not valid');
    } else {
      setMailError('');
      console.log('Email is valid:', mail);
    }

    if (!fname || fname == '') {
      setFnameError('First Name cannot be empty');
    }

    if (!lname || lname == '') {
      setLnameError('Last Name cannot be empty');
    }
    if (!password || password == '') {
      setPasswordError('Password cannot be empty');
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} name='myform'>
      <input
        value={fname}
        onChange={handleFnameInput}
        className={styles.input}
        style={fnameError ? errorStyles : normalStyles}
        type='text'
        name='fname'
        placeholder='First Name'
      />
      <p
        style={{
          color: 'red',
          fontSize: 'small',
          paddingLeft: '60%',
          display: 'none',
        }}
      >
        <i>First Name cannot be empty</i>
      </p>
      <br />
      <input
        value={lname}
        onChange={handleLnameInput}
        className={styles.input}
        style={lnameError ? errorStyles : normalStyles}
        type='text'
        name='lname'
        placeholder='Last Name'
      />
      <p
        style={{
          color: 'red',
          fontSize: 'small',
          paddingLeft: '60%',
          display: 'none',
        }}
      >
        <i>Last Name cannot be empty</i>
      </p>
      <br />
      <input
        value={mail}
        onChange={handleMailInput}
        className={styles.input}
        style={mailError ? errorStyles : normalStyles}
        type='email'
        name='mail'
        placeholder='Email Address'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
      />
      <p
        style={{
          color: 'red',
          fontSize: 'small',
          paddingLeft: '60%',
          display: 'none',
        }}
      >
        <i>Looks like this is not an email</i>
      </p>
      <br />
      <input
        value={password}
        onChange={handlePasswordInput}
        className={styles.input}
        style={passwordError ? errorStyles : normalStyles}
        type='password'
        name='password'
        placeholder='Password'
      />
      <p
        style={{
          color: 'red',
          fontSize: 'small',
          paddingLeft: '60%',
          display: 'none',
        }}
      >
        <i>Password cannot be empty</i>
      </p>
      <br />
      <input
        className={`${styles.submit} ${styles.input}`}
        type='button'
        value='CLAIM YOUR FREE TRIAL'
      />
      <br />

      <p style={{ color: 'hsl(246, 25%, 77%)' }}>
        By clicking the button, you are agreeing to our
        <span style={{ color: 'red', cursor: 'pointer' }}>
          Terms and Services
        </span>
      </p>
    </form>
  );
}
