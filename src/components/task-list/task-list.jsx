import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';

export default function TaskList({
  todo,
  onCheked,
  onDeleted,
  startTimer,
  pauseTimer,
}) {
  const elements = todo.map((elem) => {
    const {
      label, time, isActive, id, minutes, seconds,
    } = elem;
    return (
      <Task
        label={label}
        time={time}
        styleName={isActive ? null : 'completed'}
        key={id}
        minutes={minutes}
        seconds={seconds}
        onCheked={() => onCheked(id)}
        onDeleted={() => onDeleted(id)}
        startTimer={() => startTimer(id)}
        pauseTimer={() => pauseTimer()}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todo: [],
  onCheked: () => {},
  onDeleted: () => {},
};

TaskList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  onCheked: PropTypes.func,
  onDeleted: PropTypes.func,
};
