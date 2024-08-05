import { useState } from "react";
import image2 from "../assets/image3.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import Toastify from "toastify-js";
import NavigationBar from "../Components/Navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${BaseUrl}/login`, {
        email,
        password,
      });
      // console.log(data.message, " ini access tokennya")
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("email", email);

      Toastify({
        text: data.message,
        className: "info",
        gravity: "Top",
        position: "Right",
        style: {
          background: "transparent",
          border: "2px",
          fontWeight: "bold",
        },
      }).showToast();

      if (localStorage.access_token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Toastify({
        text: "failed to login",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      navigate("/login");
    }
  }

  return (
    <>
      <div
        className="h-screen bg-cover w-[100%] absolute"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div className="mx-5 flex items-center justify-end absolute top-[50vh] w-[20rem] overflow-hidden ml-[62rem] fixed">
        <form className="mt-6 w-full h-auto">
          <div className="w-full h-auto bg-tranparent mb-[2rem]">
            <label className="block text-black text-2xl" id="id1">
              Email Address
            </label>
            <input
              type="email"
              id="text1"
              placeholder="index@gmail.com.."
              className="w-full px-4 py-3 rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-black text-2xl" id="id2">
              Password
            </label>
            <input
              type="password"
              id="text2"
              placeholder="Enter Password"
              minLength={6}
              className="w-full px-4 py-3 rounded-lg text-black bg-transparent mt-2 border focus:border-black
          focus:bg-transparent focus:outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="w-[10rem] mx-[5rem] block border bg-transparent hover:bg-slate-100 focus:bg-indigo-400 text-black font-semibold rounded-lg
        px-4 py-3 mt-6"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}