import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ onAdded }) {
  const [state, setState] = useState({
    label: '',
    minutes: '',
    seconds: '',
  });

  const onInputChange = (event) => {
    setState({
      ...state,
      label: event.target.value.trimStart(),
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { label, minutes, seconds } = state;

    if (typeof onAdded === 'function') {
      onAdded(label, minutes, seconds);
    }

    setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  const onChangeMinute = (event) => {
    setState({
      ...state,
      minutes: Number(event.target.value),
    });
  };

  const onChangeSecond = (event) => {
    setState({
      ...state,
      seconds: event.target.value,
    });
  };

  const { label, minutes, seconds } = state;

  return (
    <header>
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          required
          onInput={onInputChange}
          value={label}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          min={0}
          onChange={onChangeMinute}
          value={minutes}
          required
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Sec"
          onChange={onChangeSecond}
          value={seconds}
          min={1}
          max={59}
          required
        />

        <button
          type="submit"
          aria-label="Add new todo"
        />
      </form>
    </header>
  );
}

NewTaskForm.defaultProps = {
  onAdded: () => {},
};

NewTaskForm.propTypes = {
  onAdded: PropTypes.func,
};

export default NewTaskForm;
