import "./login.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [mail, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    return setEmail(e.target.value);
  };

  const lapassword = (e) => {
    setPassword(e.target.value);
  };
  const user = localStorage.getItem("password");

  //---------------------------------------------------------------------------------------------------------------------------------------------------------

  const logearUsuario = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:3010/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const usuarioFetch = await respuesta.json();
      console.log(usuarioFetch);
      localStorage.token = usuarioFetch.token;

    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  ///---------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="contenedorl">
      <h1 className="loginn">Login Pokemones</h1>
      <div className="containerl">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={logearUsuario}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input
                  type="text"
                  name="email"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>

                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={lapassword}
                />
              </div>
              <button
                className="button login__submit"
                onClick={() => navigate(-1)}
              >
                <span className="button__text">Login</span>
              </button>
            </form>
            <div className="social-login">
              <Link to="/">
                <button>Regresar</button>
              </Link>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
