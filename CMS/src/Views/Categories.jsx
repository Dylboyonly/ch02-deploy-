import { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../BaseUrl/BaseUrl"
import { redirect, useNavigate } from "react-router-dom"

export default function Categories(){
    const [categories , setCategories] = useState([])
    const navigate = useNavigate()

    async function fetchCategories(){
        try {
            const { data } = await axios.get(`${BaseUrl}/categories`,{
                headers:{
                    Authorization : `Bearer ${localStorage.access_token}`
                }
            })
            console.log(data.READall)
            setCategories(data.READall)
        } catch (error) {
            console.log(error)
           return redirect('/')
        }
        
    }


    useEffect(()=>{
        fetchCategories()
    },[])


    return(
        <>
          <div className="h-screen w-full bg-orange-50">
            <div className=" w-[100%] h-[11%] flex">
            <span className="text-black text-7xl pt-[3%] pl-[64%]" id="Titlepage1">Categories List</span>
            </div>
        <div className="h-[1rem] w-full flex justify-center">
            <div className="h-[10%] w-[93%] bg-black mt-[15px]"/>
        </div>
        <div className="flex w-full h-[60%] bg-transparent gap-5">
        <div className="h-[70%] w-[1.2px] bg-black ml-[3.3rem]" />
            <div className="h-[100%] w-[90%] mt-[1rem] overflow-auto">
            <div className="overflow-x-auto">
  <table className="table table-xl">
    <thead>
      <tr>
        <th className="text-black text-[20px] font-serif font-thin font-light">Id</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Name</th>
      </tr>
    </thead>
    <tbody>
        {categories.map(el=>{
            return(
                <tr className="tableData" key={el.id}>
                <th className="text-black">{el.id}</th>
                <td className="text-black text-[14px] font-serif font-thin font-light">{el.name}</td>
              </tr>
            )
        })}
    </tbody>
    <tfoot>
      <tr>
        <th className="text-black text-[20px] font-serif font-thin font-light">Id</th>
        <th className="text-black text-[20px] font-serif font-thin font-light">Name</th>
      </tr>
    </tfoot>
  </table>
</div>
            </div>
        </div>
        <div className="">
        <footer className="footer footer-center bg-transparent text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">About us</a>
    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">Contact</a>
    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">Jobs</a>
    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p className="text-black text-1xl font-serif font-thin font-light">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
        </div>
        </>
    )
}