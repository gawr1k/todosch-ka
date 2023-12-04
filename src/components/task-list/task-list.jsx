import PropTypes from 'prop-types';
import { Task } from '../task/task.jsx';

export const TaskList = ({
    todo,
    onCheked,
    onDeleted,
    startTimer,
    pauseTimer,
}) => {
    const elements = todo.map((elem) => {
        const { label, time, isActive, id, minutes, seconds } = elem;
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
};

TaskList.defaultProps = {
    todo: [],
    onCheked: () => {},
    onDeleted: () => {},
};

TaskList.propTypes = {
    todo: PropTypes.array,
    onCheked: PropTypes.func,
    onDeleted: PropTypes.func,
    startTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
};
