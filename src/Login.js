import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token && token !== "undefined") {
  //     navigate("/profile", { replace: true });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const URL = "https://martiann.com/login";
    const raw = JSON.stringify({
      email,
      pass: password,
    });
    const reqObj = {
      method: "POST",
      body: raw,
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    fetch(URL, reqObj)
      .then((res) => res.json())
      .then((res) => {
        if (res?.access_token) {
          alert("User logged In successfully");
          localStorage.setItem("token", res?.access_token);
          navigate("/profile", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err, "login err");
        alert(err.msg);
      });
  }

  return (
    <div className="flex h-screen w-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <h1 className="text-center">Login</h1>
          <img
            alt="img#"
            className="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
          />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <a
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
            href="##"
          >
            Forgot Password?
          </a>
          <Link
            to="/signup"
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
          >
            Create account?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
