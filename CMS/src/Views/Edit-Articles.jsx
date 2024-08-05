import FormData from "../Components/Form";
import { useState, useEffect } from "react";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "toastify-js";

export default function ArticleEdit() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
//   setNewiD(id)
//   console.log(newdid)

  async function fetchNews() {
    try {
      const news = await axios.get(`${BaseUrl}/news/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      console.log(news.data.OneNews, "????");
      setArticles(news.data.OneNews);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log(articles,">>>>>>>>>>")
    console.log("kalau muncul pesan ini artinya proses mounted berhasil");
    fetchNews();
  }, []);

  async function HandleSubmit(e, title, content, imgUrl, category) {
    console.log(e);
    e.preventDefault();
    const editedArticle = {
      title,
      content,
      imgUrl,
      categoryId: category,
    };
    // console.log(editedArticle ,"ini article yang  mau diedit")
    try {
      await axios.put(`${BaseUrl}/news/${id}`, editedArticle, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Toastify({
        text: "Success Edit",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
      navigate("/");
    } catch (error) {
      Toastify({
        text: "text error",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  return (
    <>
      <div className="h-screen w-full bg-orange-50">
        <div className=" w-[100%] h-[13%] flex">
          <span
            className="text-black text-7xl pt-[3%] pl-[64%]"
            id="Titlepage1"
          >
            Edit Articles
          </span>
        </div>
        <div className="h-[1rem] w-full flex justify-center">
          <div className="h-[10%] w-[93%] bg-black mt-[15px]" />
        </div>
        <div className="ml-[3rem] h-[3rem] w-[93%] flex justify-center items-center bg-transparent">
          <div
            className="h-auto w-[33%]  bg-transparent flex justify-center text-2xl text-black"
            id="texthelper"
          >
            Article Preview
          </div>
          <div className="h-[40%] bg-black w-[1.5px]" />
          <div
            className="h-auto w-[33%]  bg-transparent flex justify-center text-2xl text-black"
            id="texthelper"
          >
            Edit Article Form
          </div>
          <div className="h-[40%] bg-black w-[1.5px]" />
          <div
            className="h-auto w-[33%] bg-transparent flex justify-center text-2xl text-black text-bold"
            id="texthelper"
          >
            Others Articles
          </div>
        </div>
        <div className="h-[1rem] w-full flex justify-center">
          <div className="h-[10%] w-[93%] bg-black " />
        </div>
        <div className="flex w-full h-[78%] bg-transparent gap-5 absolute">
          <div className="h-[90%] w-[94%] mt-[0.5rem] ml-[2rem] pl-[1.5rem]">
            <FormData
              button="Edit"
              article={articles}
              HandleSubmit={HandleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
