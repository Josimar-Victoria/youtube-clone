import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./loginScreen.scss";
export default function LoginScreen() {
  const dispatch = useDispatch();
  const handlerLogin = () => {
    dispatch(login());
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
        <button onClick={handlerLogin}>Iniciar sesión con Google</button>
        <p>Este proyecto se realiza utilizando YOUTUBE DATA API</p>
      </div>
    </div>
  );
}
