import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formLabel}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          className={s.formInput}
          placeholder=" "
          onChange={handleNameChange}
        />
      </label>
      <label className={s.formLabel}>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          className={s.formInput}
          placeholder=" "
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
