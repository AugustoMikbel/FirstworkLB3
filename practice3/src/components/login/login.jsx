import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameDisplay, setUsernameDisplay] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      setUsername(value);
    }

    setUsernameDisplay(`Nombre de usuario: ${value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
      return;
    }

    alert("¡Usuario registrado correctamente!");
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Ingrese su nombre de usuario"
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>{usernameDisplay}</p>
    </div>
  );
}

export default Login;
