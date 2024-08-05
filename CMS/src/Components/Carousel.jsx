import { useState, useEffect } from "react";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function NewsExample({one}) {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-screen w-full grid overflow-auto border border-black rounded px-1 py-1">
        {one.map((el, index) => {
          return (
            <div className="bg-orange-50 h-auto w-full" key={el.id}>
              <div className="flex w-full h-auto gap-2 px-1">
                <figure className="h-15 w-10 rounded py-2">
                  <img className="rounded" src={el.imgUrl} 
                  onClick={()=>{navigate(`/edit/${el.id}`);window.location.reload()}}/>
                </figure>
                <div className="text-black" id="mainText">"{el.title.slice(0,41)}.."</div>
              </div>
              <div className="h-[1.2px] w-full flex justify-center mt-[1px]">
                <div className="h-full w-[93%] bg-black " />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
