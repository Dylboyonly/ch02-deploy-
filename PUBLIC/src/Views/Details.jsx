import { BaseUrl } from "../BaseUrl/baseUrl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import React from "react"
import axios from "axios";

export default function NewsDetail(){
    const [articles, setArticles] = useState({});
    let { id } = useParams();
   
    async function fetchNews() {
        try {
          const { data } = await axios.get(`${BaseUrl}/pub/news/${id}`);
          setArticles(data.find || {});
          console.log(articles,"jvsjvcjwbvhw")
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        console.log("kalau muncul pesan ini artinya proses mounted berhasil");
        fetchNews();
      }, []);


    return(
        <>
        <div className="h-screen w-full bg-slate-100">
            <div className="h-[15%] w-full flex justify-center">
                {articles.title}
            </div>
            <div className="w-full h-[50%] flex justify-center">
              <img src={articles.imgUrl} />
            </div>
            <div>
              {articles.content}
            </div>
        </div>
        </>
    )
}