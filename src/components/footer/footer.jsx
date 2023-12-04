// eslint-disable-next-line quotes
import React from "react";
// eslint-disable-next-line quotes
import PropTypes from "prop-types";

// eslint-disable-next-line quotes
import { TaskFilter } from "../tasks-filter/tasks-filter";

export const Footer = ({
  activeItems,
  filter,
  onFilterChange,
  onAllDelete,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeItems} items left</span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onAllDelete}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  activeItems: 0,
  // eslint-disable-next-line quotes
  filter: "All",
  onFilterChange: () => {},
  onAllDelete: () => {},
};

Footer.propTypes = {
  activeItems: PropTypes.number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onAllDelete: PropTypes.func,
};
