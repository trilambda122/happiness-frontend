import React, { useRef, useContext } from "react";
// import HappyContext from "../context/happyContext";
import api from "../utils/api";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    api.submitLoginCreds(creds).then((res) => {
      console.log("STATUS ", res);
      if (res.status === 200) {
        localStorage.setItem('email',
        JSON.stringify(creds.email));
        history.push("/dashboard");
      }
    }).catch((error)=>{
      history.push("/unauthorized");
      console.log(error.response)
    })
  };

  ////
  return (
    <div>
      <main className="form-signin" onSubmit={handleSubmit}>
        <form>
          <img
            className="mb-4"
            src="./images/happy.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={emailRef}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={passwordRef}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; Happiness 2021</p>
        </form>
      </main>
    </div>
  );
}
