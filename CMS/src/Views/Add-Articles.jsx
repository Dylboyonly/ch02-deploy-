import { useNavigate } from "react-router-dom";
import FormData from "../Components/Form";
import axios from "axios";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import Toastify from "toastify-js"

export default function AddArticle(){
    const navigate = useNavigate()

    async function HandleSubmit( e ,title , content , imgUrl , category){
        console.log(e)
        e.preventDefault()
        const newArticle = {
            title,
            content,
            imgUrl,
            categoryId: category
        };
        console.log(newArticle)
        try {

            const { data } = await axios.post(`${BaseUrl}/news`,newArticle, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });
            Toastify({
                text: "Success add new data",
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
                    fontWeight: "bold"
                }
            }).showToast();
            navigate('/')
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
                    fontWeight: "bold"
                }
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
            Add Articles
          </span>
        </div>
        <div className="h-[1rem] w-full flex justify-center">
          <div className="h-[10%] w-[93%] bg-black mt-[15px]" />
        </div>
        <div className="ml-[3rem] h-[3rem] w-[93%] flex justify-center items-center bg-transparent">
            <div className="h-auto w-[33%]  bg-transparent flex justify-center text-2xl text-black" id="texthelper">
               Article Preview
            </div>
            <div className="h-[40%] bg-black w-[1.5px]"/>
            <div className="h-auto w-[33%]  bg-transparent flex justify-center text-2xl text-black" id="texthelper">
               Add Atricle Form
            </div>
            <div className="h-[40%] bg-black w-[1.5px]"/>
            <div className="h-auto w-[33%] bg-transparent flex justify-center text-2xl text-black text-bold" id="texthelper">
                Others Articles
            </div>
        </div>
        <div className="h-[1rem] w-full flex justify-center">
          <div className="h-[10%] w-[93%] bg-black " />
        </div>
        <div className="flex w-full h-[78%] bg-transparent gap-5 absolute">
          <div className="h-[90%] w-[94%] mt-[0.5rem] ml-[2rem] pl-[1.5rem]">
           <FormData button="Add" HandleSubmit={HandleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}
