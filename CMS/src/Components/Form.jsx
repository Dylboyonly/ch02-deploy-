import NewsExample from "./Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import { redirect } from "react-router-dom";

export default function FormData({ button, HandleSubmit ,article}){
// console.log(article,"ini article ")
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [category, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);


  useEffect(()=>{
    if(article){
        setTitle(article.title)
        setContent(article.content)
        setImgUrl(article.imgUrl)
        setCategoryId(article.categoryId)
    }
  },[article])

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${BaseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategories(data.READall);
    } catch (error) {
      console.log(error);
      return redirect("/");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchNews(){
    try {
        const  news  = await axios.get(`${BaseUrl}/news`,{
            headers: { Authorization: `Bearer ${localStorage.access_token}` }
        })
        // console.log(news ,'????')
        setArticles(news.data.allNews)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    // console.log(articles,">>>>>>>>>>")
    console.log("kalau muncul pesan ini artinya proses mounted berhasil")
    fetchNews()
} ,[])

  return (
    <>
      <div className="h-full w-full bg-transparent flex overflow-hidden">
        <div className="w-[66%] h-full flex">
          <div className="w-[50%] h-full bg-transparent flex px-[1.5px] py-[1.5px] flex justify-center border border-black rounded">
            <div className="w-full h-full bg-transparent border border-black rounded overflow-auto">
              <div className="w-full h-auto bg-transparent mt-[0.5rem] flex justify-center py-2">
                <h1 className="text-black text-2xl px-3" id="mainText">
                  "{title}"
                </h1>
              </div>
              <div className="h-[1.2px] w-full flex justify-center mt-[1rem] mb-2">
                <div className="h-full w-[93%] bg-black" />
              </div>
              <div className="h-[1.2px] w-full flex justify-center">
                <div className="h-full w-[93%] bg-black" />
              </div>
              <div
                className="w-full h-[40%] bg-cover rounded mt-5 mb-1 pl-1 pr-1 border border-black"
                style={{ backgroundImage: `url(${imgUrl})` }}
              ></div>
              <div className="h-[1.2px] w-full flex justify-center mt-[1rem] mb-2">
                <div className="h-full w-[93%] bg-black" />
              </div>
              <div className="h-[1.2px] w-full flex justify-center">
                <div className="h-full w-[93%] bg-black" />
              </div>
              <div className="w-full h-[60%]bg-transparent overflow-auto">
                <h1 className="text-black text-sm px-3 py-2" id="">
                  "{content}"
                </h1>
              </div>
            </div>
          </div>
          <div className="h-full w-[1.2px] bg-black ml-[1rem]" />
          <div className="w-[50%] h-full bg-transparent pt-[1rem] pl-[1rem]">
            <div className="bg-transparent w-full h-[90%] grid cols-1 pt-[1rem] pl-[1.5rem]">
              <form
                className="bg-transparent w-[90%] h-full pt-[1rem]"
                onSubmit={(e) =>
                  HandleSubmit(e, title, content, imgUrl, category)
                }
              >
                <div className="w-full h-[15%] bg-transparent">
                  <label className="block text-black text-2xl" id="id1">
                    Title
                  </label>
                  <input
                    onChange={(e) => {setTitle(e.target.value).toUpperCase()}}
                    type="text"
                    id="text1"
                    placeholder="index@gmail.com.."
                    className="w-full h-[50%] border border-black rounded-lg bg-transparent text-black mt-1 border border-grey focus:border-black
              focus:bg-transparent focus:outline-none text-lg pl-2"
                  />
                </div>
                <div className="mt-4 w-full h-[30%] bg-transparent">
                  <label className="block text-black text-2xl" id="id2">
                    Content
                  </label>
                  <input
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    id="text2"
                    placeholder="Insert Content"
                    minLength={1}
                    className="w-full h-[77%] border border-black rounded-lg text-black bg-transparent mt-1 border focus:border-black
          focus:bg-transparent focus:outline-none text-sm overflow-auto pl-2"
                  />
                </div>
                <div className="w-full h-[15%] bg-transparent mb-[1rem] mt-4">
                  <label className="block text-black text-2xl" id="id1">
                    Image Url
                  </label>
                  <input
                    onChange={(e) => setImgUrl(e.target.value)}
                    type="text"
                    id="text1"
                    placeholder="index@gmail.com.."
                    className="w-full h-[50%] border border-black rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none text-lg pl-2"
                  />
                </div>
                <div className="w-full h-[15%] bg-transparent mb-[1rem] mt-4">
                  <label className="block text-black text-2xl" id="id1">
                    Category
                  </label>
                  <select
                    onChange={(e) => setCategoryId(e.target.value)}
                    type="text"
                    id="text1"
                    placeholder="index@gmail.com.."
                    className="w-full h-[50%] border border-black rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-orange-50 focus:outline-none text-lg pl-2"
                    value={category}
                  >
                    {categories.map((c) => {
                      return (
                        <option
                          className="bg-orange-50"
                          key={c.id}
                          value={c.id}
                        >
                          {c.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-[10rem] ml-[6rem] block border border-black  bg-transparent hover:bg-slate-100 focus:bg-indigo-400 text-black rounded-lg mt-6 text-xl"
                >
                  {button}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="h-full w-[1.5px] bg-black ml-[1rem]" />
        <div className="w-[34%] h-full bg-transparent grid overflow-auto pl-3.5">
          <NewsExample one={articles} />
        </div>
      </div>
    </>
  );
}
