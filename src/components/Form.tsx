'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Form.module.css';

export default function Form() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    mail: '',
    password: '',
  });

  const [fnameError, setFnameError] = useState<string>('');
  const [lnameError, setLnameError] = useState<string>('');
  const [mailError, setMailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!data.mail) {
      setMailError('Email cannot be empty');
    } else if (!validateEmail(data.mail)) {
      setMailError('Email address is not valid');
    } else {
      setMailError('');
    }

    if (!data.fname || data.fname == '') {
      setFnameError('First Name cannot be empty');
    } else {
      setFnameError('');
    }

    if (!data.lname || data.lname == '') {
      setLnameError('Last Name cannot be empty');
    } else {
      setLnameError('');
    }
    if (!data.password || data.password == '') {
      setPasswordError('Password cannot be empty');
    } else {
      setPasswordError('');
    }
  };
  const errorStyles = {
    border: '1px solid rgba(234, 56, 31,1)',
    backgroundImage: 'url(/images/icon-error.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '95% 50%',
    color: 'red',
  };

  const normalStyles = {
    border: '3px solid hsl(246, 25%, 77%)',
    backgroundImage: 'none',
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} name='myform'>
      <input
        value={data.fname}
        onChange={handleChange}
        className={styles.input}
        style={fnameError ? errorStyles : normalStyles}
        type='text'
        name='fname'
        placeholder='First Name'
      />
      <span style={{ color: 'black' }}>{fnameError}</span>
      <br />
      <input
        value={data.lname}
        onChange={handleChange}
        className={styles.input}
        style={lnameError ? errorStyles : normalStyles}
        type='text'
        name='lname'
        placeholder='Last Name'
      />
      {lnameError}
      <br />
      <input
        value={data.mail}
        onChange={handleChange}
        className={styles.input}
        style={mailError ? errorStyles : normalStyles}
        type='email'
        name='mail'
        placeholder='Email Address'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
      />
      {mailError}
      <br />
      <input
        value={data.password}
        onChange={handleChange}
        className={styles.input}
        style={passwordError ? errorStyles : normalStyles}
        type='password'
        name='password'
        placeholder='Password'
      />
      {passwordError}
      <br />
      <button className={`${styles.submit} ${styles.input}`} type='submit'>
        CLAIM YOUR FREE TRIAL
      </button>
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
