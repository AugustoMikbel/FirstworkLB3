import PropTypes from "prop-types";
import TaskItem from "../taskItem/taskItem";

function TaskList({ tasks, completeTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
