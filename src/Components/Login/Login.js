import React from "react";
import "./Login.css";
import Form from "../Form/Form";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container1">
          <div className="login__form">
            <Form />
          </div>
        </div>
        {/* {/ login container 2 end /} */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* {/ login container end  /} */}
    </div>
  );
}
