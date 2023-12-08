import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default function Task({
  minutes,
  seconds,
  time,
  styleName,
  onCheked,
  onDeleted,
  startTimer,
  pauseTimer,
  label,
}) {
  const [edit, setEdit] = React.useState(false);
  const [currentLabel, setCurrentLabel] = React.useState(label);

  const onTaskEdit = () => {
    setEdit(true);
  };

  const changeTask = (event) => {
    setCurrentLabel(event.target.value);
  };

  const submitTask = (event) => {
    event.preventDefault();
    setEdit(false);
  };

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
          <span className="title">{currentLabel}</span>
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
          onClick={onTaskEdit}
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
        <form onSubmit={submitTask}>
          <input
            type="text"
            className="edit"
            value={currentLabel}
            onInput={changeTask}
          />
        </form>
      ) : null}
    </li>
  );
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
