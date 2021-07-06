import React /* , { useContext } */ from "react";
import Task from "./Task";
import PropTypes from "prop-types";
//import Context from "../context";

const Tasks = ({ tasks, onDelete }) => {
  //const { tasks, setTasks } = useContext(Context);

  return tasks.map((task) => (
    <Task onDelete={() => onDelete(task.id)} key={task.id} task={task} />
  ));
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default Tasks;
