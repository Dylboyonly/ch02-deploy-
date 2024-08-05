import { BaseUrl } from "../BaseUrl/baseUrl";
import Card from "../Components/Card";
import { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from "./Pagination";


export default function HomePage(){
    const [article , setArticle] = useState([])
    const [search ,setSearch] = useState('')
    const [pageNumber , setPageNumber] = useState(1)
    const [totalPage  , setTotalPage] = useState()
    const [onecAT , setOneCat] = useState('')
    const [categories, setCategories] = useState([
        {
          id: 1,
          name: "Pet",
        },
        {
          id: 2,
          name: "Travel",
        },
        {
          id: 3,
          name: "News",
        },
        {
          id: 4,
          name: "Sport",
        },
        {
          id: 5,
          name: "Technology",
        },
        {
          id: 6,
          name: "food",
        },
      ]);



    async function fetchArticles() {
        try {
            const { data } = await axios.get(`${BaseUrl}/pub/news?filter=${onecAT}&sort&page=$=&page${pageNumber}=&search=${search}&authorId=`);
            setArticle(data.data)
            setTotalPage(data.totalPage)
            setPageNumber(data.page)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("klo ada tulisan ini artinya mounted jalan");
        fetchArticles();
    }, [])

    useEffect(() => {
        console.log('ini adalah watchers, akan dijalankan sebelum pemasangan dom & react di komponen ini dan ketika state yg di pantau dalam dependencies(parameter kedua) berubah');
        fetchArticles();
    }, [onecAT,search])

   

    return(
        <>
        <div className="h-screen w-[100%] bg-yellow-500">
            <div className="w-full h-[15%] bg-transparent flex justify-center items-center pt-3">
                <div className="w-[40%] h-[35%] bg-transparent flex gap-3 ">
                   <input 
                     type="text"
                     id="text2"
                     placeholder="index@gmail.com"
                     minLength={6}
                     className="w-full px-4 py-3 rounded-lg text-black bg-transparent border border-slate-400 focus:border-black
                 focus:bg-transparent focus:outline-none"
                 onChange={(e) => setSearch(e.target.value)}
                />
                    <button className="text-black text-[19px]">Search</button>
                </div>
            </div>
            <div className="h-[10%] w-full bg-slate-500 flex justify-end items-center gap-7 px-2 pr-5 text-1xl">
          {categories.map((el, index) => {
            return <button onClick={(e)=>{setOneCat(el.id)}}>{el.name}</button>;
          })}
        </div>
            <div className="h-[85%] w-full grid grid-cols-4 gap-3 bg-slate-500 pt-4 overflow-auto px-3">
                {article.map((el, index)=>{
                   return( <Card key={index} card={el} /> )
                })}
            </div>
            
        </div>
        <div className="flex justify-center mt-[5.5rem] bg-slate-50 h-full">
                <Pagination totalPage={totalPage} setPageNumber={setPageNumber} pa={pageNumber} />
            </div>
        </>
    )
}