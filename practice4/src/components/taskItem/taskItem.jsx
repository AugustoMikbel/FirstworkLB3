import PropTypes from "prop-types";

function TaskItem({ task, index, completeTask, deleteTask }) {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
      <span style={{ color: task.completed ? "lightgrey" : "black" }}>
        {task.text}
      </span>
      <button onClick={() => completeTask(index)}>
        {task.completed ? "Deshacer" : "Completado"}
      </button>
      <button onClick={() => deleteTask(index)}>Borrar</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
