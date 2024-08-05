
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
// import { BaseUrl } from "../BaseUrl/baseUrl";

export default function NavigationBar() {
 
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[5rem] bg-slate-200 flex justify-center pt-4">
        <div className="h-[90%] w-[40%] bg-slate-200 text-black text-4xl flex justify-start items-center pl-[5%]">
          <button
            onClick={() => {
              navigate("/");window.location.reload();
            }}
          >
            Hackti news
          </button>
        </div>
        <div className="h-full w-[60%] bg-slate-500 flex justify-end items-center gap-7 px-2 pr-5 text-1xl">
        </div>
      </div>
      <div className="h-[1px] w-full bg-black" />
    </>
  );
}
