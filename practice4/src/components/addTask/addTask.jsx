import { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Agregue nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
