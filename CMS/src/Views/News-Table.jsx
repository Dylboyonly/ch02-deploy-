import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BaseUrl } from "../BaseUrl/BaseUrl"
import Toastify from "toastify-js"
import { useEffect } from "react"

export default function NewsTable({news , setArticles}){
    const navigate = useNavigate()
    
    async function HandleDelete(id){
        console.log(id)
        try {
            await axios.delete(`${BaseUrl}/news/${id}`,{
                headers: { Authorization: `Bearer ${localStorage.access_token}`}
            })
            setArticles()
        } catch (error) {
            console.log(error)
            Toastify({
                text:`Failed to delete news with id ${id}`,
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
                    fontWeight: "bold"
                }
            }).showToast();
        }
    }

    useEffect(()=>{
    },[])

    return(
        <>
        <div className="overflow-x-auto">
  <table className="table table-xl">
    <thead>
      <tr>
        <th className="text-black text-[20px] font-serif font-thin font-light">Id</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Title</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Content</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Image Url</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">CategoryId</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">AuthorId</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Action</th>
      </tr>
    </thead>
    <tbody>
        {news.map(el=>{
            return(
                <tr className="tableData" key={el.id}>
                <th className="text-black">{el.id}</th>
                <td className="text-black text-[14px] font-serif font-thin font-light">{el.title.slice(0,35)}</td>
                <td className="text-black text-[14px] font-serif font-thin font-light">{el.content.slice(0,100)}..</td>
                <td className="text-black text-[14px] font-serif font-thin font-light">{el.imgUrl.slice(0,20)}</td>
                <td className="text-black text-[14px] font-serif font-thin font-light">{el.categoryId}</td>
                <td className="text-black text-[14px] font-serif font-thin font-light"> {el.authorId}</td>
                <td>
                    <div className="flex justify-center items-center gap-2">
                   <button className="w-[4rem] h-[2rem] block border border-black bg-transparent focus:bg-indigo-400 text-black font-semibold rounded-lg mt-2" onClick={()=>{navigate(`/edit/${el.id}`)}}>Edit</button>
                   <button  className="w-[4rem] h-[2rem] block border border-black bg-transparent focus:bg-indigo-400 text-black font-semibold rounded-lg mt-2" onClick={()=>{HandleDelete(el.id)}}>Delete</button>
                    </div>
                </td>
              </tr>
            )
        })}
    </tbody>
    <tfoot>
      <tr>
      <td className="text-black text-[15px] font-serif font-thin font-light">Id</td>
        <td className="text-black text-[15px] font-serif font-thin font-light">Title</td>
        <td className="text-black text-[15px] font-serif font-thin font-light">Content</td>
        <td className="text-black text-[15px] font-serif font-thin font-light">Image Url</td>
        <td className="text-black text-[15px] font-serif font-thin font-light">CategoryId</td>
        <td className="text-black text-[15px] font-serif font-thin font-light">AuthorId</td>
        <th className="text-black text-[15px] font-serif font-thin font-light">Action</th>
      </tr>
    </tfoot>
  </table>
</div>
        </>
    )
}
