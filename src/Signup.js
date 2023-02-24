import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token && token !== "undefined") {
  //     navigate("/profile", { replace: true });
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password doesn't match with confirm password");
    }

    console.log({ email, password });
    // setIsLoading(true);
    const URL = "https://martiann.com/register";
    const raw = JSON.stringify({
      email,
      pass: password,
      name,
      bio: "Full Stack JavaScript Developer",
      location: "Ghaziabad, Uttar Pradesh, India",
      twitter: "https://twitter.com/dasjideepak",
      image_file: "https://avatars.githubusercontent.com/u/38307844?v=4",
      instagram: "https://avatars.githubusercontent.com/u/38307844?v=4",
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
      .then(async (res) => {
        if (res?.access_token) {
          alert("User created successfully");
          await localStorage.setItem("token", res?.access_token);
          navigate("/profile");
        }
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="flex h-screen w-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <h1 className="text-center">Signup</h1>
          <img
            alt="img#"
            className="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
          />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Name
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-indigo-500"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <input
              required
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <Link
            to="/login"
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
          >
            Already registered?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
