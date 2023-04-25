"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
const kugile = localFont({ src: "../../public/kugile/Kugile_Demo.ttf" });

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && username && password && repeatPassword === "") {
      console.log("One or more fields are missing");
    } else {
      fetch("http://localhost:4001/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }).then((response) => response.json());
    }
  };

  return (
    <div className="h-[70vh] md:h-[80vh] items-center flex w-full justify-center ">
      <div className="flex flex-col gap-4 max-w-[420px] md:min-w-[700px] mx-auto">
        <h1 className={`${kugile.className} text-5xl text-center`}>Register</h1>
        <form className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap">
            <label>Username</label>
            <input
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <div className="flex flex-col gap">
            <label>Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <div className="flex flex-col gap">
            <label>Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <div className="flex flex-col gap">
            <label>Repeat Password</label>
            <input
              required
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="border border-gray-400 py-3 px-2 rounded-lg outline-none w-full "
            />
          </div>
          <input
            type="button"
            value="submit"
            onClick={handleSubmit}
            className="cursor-pointer bg-green-800 text-white font-bold uppercase py-3 px-2 rounded-lg outline-none w-full "
          />
        </form>
        <div className="flex w-full items-center justify-center ">
          <Link href="/login" className="text-sm text-green-800">
            Already have an account Login ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
