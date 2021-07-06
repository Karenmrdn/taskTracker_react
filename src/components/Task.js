import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
