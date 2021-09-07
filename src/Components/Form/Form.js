import React, { useState, useEffect } from "react";
import "./Form.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions";

function Form() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  let history = useHistory();
  const [mobileNo, setMobileno] = useState("");
  const [password, setPassword] = useState({ value: "", isValid: false });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.isValid) {
      localStorage.setItem(
        "user",
        JSON.stringify({ mobileNo: mobileNo, password: password.value })
      );
      history.push({
        pathname: "/subject",
      });
      alert("Login Succefully!");
    } else {
      alert("Please enter valid Password!");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);

    if (userData) {
      // setMobileno(userData.mobileNo);
      // setPassword({ value: userData.password, isValid: true });
    } else {
      setMobileno("");
      setPassword({ value: "", isValid: false });
    }
  }, []);

  return (
    <div className="container login__container1">
      <div className="column">
        <form onSubmit={onSubmit}>
          <div className="row form-group mb-3 d-flex justify-content-center">
            <div className="login__con ">
              <input
                type="text"
                placeholder="Mobile No"
                value={mobileNo}
                className="login__input"
                // onChange={validationMobileno}
                minLength={10}
                maxLength={10}
                required
                onClick={() => dispatch(increment())}
              />
            </div>
            <div className="login__con">
              <input
                type="password"
                placeholder="First Password"
                value={password.value}
                className="login__input"
                // onChange={validatePassword}
                required
                onClick={() => dispatch(decrement())}
              />
            </div>
            <div className="login__con">
              <p style={{ color: "red" }}>{password.isValid ? "" : ""}</p>
              <button type="submit" className="login__formbtn">
                Proceed
              </button>
            </div>
            <h1>counter{counter}</h1>
            {isLogged ? <h3>Valuable Information I shouldn't see </h3> : ""}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
