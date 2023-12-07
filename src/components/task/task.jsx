import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor(props) {
    const { label } = props;
    super(props);

    this.state = {
      edit: false,
      label,
    };
  }

  onTaskEdit = () => {
    this.setState({
      edit: true,
    });
  };

  changeTask = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  submitTask = (event) => {
    event.preventDefault();
    this.setState({
      edit: false,
    });
  };

  render() {
    const {
      minutes,
      seconds,
      time,
      styleName,
      onCheked,
      onDeleted,
      startTimer,
      pauseTimer,
    } = this.props;
    const { edit, label } = this.state;
    return (
      <li className={!edit ? styleName : 'editing'}>
        <div className="view">
          <input
            checked={styleName === 'completed'}
            className="toggle"
            type="checkbox"
            onChange={onCheked}
          />
          <div className="label">
            <span className="title">{label}</span>
            <span className="description">
              <button
                className="icon icon-play"
                type="button"
                aria-label="Start timer"
                onClick={startTimer}
              />

              <button
                className="icon icon-pause"
                type="button"
                aria-label="Pause timer"
                onClick={pauseTimer}
              />
              {minutes < 10 ? `0${minutes}` : minutes}
              :
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span className="created">
              {`created ${formatDistanceToNow(time, {
                includeSeconds: true,
                addSuffix: true,
              })}`}
            </span>
          </div>
          <button
            type="button"
            className="icon icon-edit"
            onClick={this.onTaskEdit}
            aria-label="Edit task"
          />
          <button
            type="button"
            className="icon icon-destroy"
            onClick={onDeleted}
            aria-label="Delete task"
          />
        </div>
        {edit ? (
          <form onSubmit={this.submitTask}>
            <input
              type="text"
              className="edit"
              value={label}
              onInput={this.changeTask}
            />
          </form>
        ) : null}
      </li>
    );
  }
}

Task.defaultProps = {
  label: 'New task',
  time: new Date(),
  styleName: null,
  onCheked: () => {},
  onDeleted: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  styleName: PropTypes.string,
  onCheked: PropTypes.func,
  onDeleted: PropTypes.func,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
};
