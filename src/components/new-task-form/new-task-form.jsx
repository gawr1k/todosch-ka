import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: '',
      minutes: '',
      seconds: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      label: event.target.value.trimStart(),
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { label, minutes, seconds } = this.state;
    const { onAdded } = this.props;

    onAdded(label, minutes, seconds);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  onChangeMinute = (event) => {
    this.setState({
      minutes: Number(event.target.value),
    });
  };

  onChangeSecond = (event) => {
    this.setState({
      seconds: event.target.value,
    });
  };

  render() {
    const { label, minutes, seconds } = this.state;
    return (
      <header>
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            required
            onInput={this.onInputChange}
            value={label}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            type="number"
            min={0}
            onChange={this.onChangeMinute}
            value={minutes}
            required
          />
          <input
            className="new-todo-form__timer"
            type="number"
            placeholder="Sec"
            onChange={this.onChangeSecond}
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
}

NewTaskForm.defaultProps = {
  onAdded: () => {},
};

NewTaskForm.propTypes = {
  onAdded: PropTypes.func,
};
