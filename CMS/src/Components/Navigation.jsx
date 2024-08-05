import { useNavigate } from "react-router-dom";
import NewDate from "./Date";


export default function NavigationBar() {
  const name = localStorage.getItem("email");
  const navigate = useNavigate();


  async function HandleLogout(){
    try {
        localStorage.clear()
        navigate('/login')     
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-[15rem] bg-orange-50 pt-1 flex justify-center items-center">
        <div className="w-[95%] h-full">
        <div className="flex justify-between h-[20%] w-full bg-transparent">
          <span className="ml-5 mt-3">
            <NewDate />
          </span>
          <div className="flex mr-6 gap-2">
            <span className="text-black mt-3" id="texet3">{name}</span>
            <div className="dropdown dropdown-end h-[2rem] w-[2rem]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-[40px] h-[35px] rounded-full bg-transparent">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-30 p-2 shadow border border-black"
              >
                <li>
                  <a onClick={HandleLogout} className="text-black">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[79%] bg-transparent">
        <div className="h-[5px] w-full bg-black" />
            <div className="flex justify-start items-center gap-2 mt-1 bg-transparent">
                <div className="w-[25%] pl-[11vw]">
                    <h1 className="text-black text-1xl" id="texthelper2">Read more about us </h1>
                    <button className="w-[6rem] mr-[5rem] block border border-black bg-transparent focus:bg-indigo-400 text-black font-semibold rounded-lg text-1xl mt-3" id="textbutton">About us</button>
                </div>
                <h1 className="text-black ml-[5rem] mb-[3rem]">The</h1>  
                <h1 className="text-black text-8xl" id="mainText">News Portal</h1>
                <div className="w-[30%] pl-[15vw]">
                    <h1 className="text-black text-1xl" id="texthelper2">Since 1989</h1>
                    <div className="h-[1px] w-[40%] bg-black mt-1" />
                    <div className="h-[1px] w-[60%] bg-black mt-1" />
                    <div className="h-[1px] w-[80%] bg-black mt-1" />
                </div>
            </div>
            <span className="w-[80%] pl-[50%] text-black" id="texthelper">"The Source of Truthfull Information."</span>
            <div className="h-[1px] w-[80%] ml-[9rem] bg-black mt-2" />
            <div className="w-[80%] h-[20%] flex justify-between items-center gap-4 ml-[10%]">
                <div className="ml-4">
                <button className="text-black" onClick={()=> navigate('/')}>Home</button> |
                </div>
                <div className="flex gap-4 mr-4">
                <button className="text-black" onClick={()=> navigate('/categories')}>Categories</button> |
                <button className="text-black" onClick={()=> navigate('/add-user')}>Add User</button> |
                <button className="text-black" onClick={()=> navigate('/add')}>Add Articles</button> |
                <button className="text-black" onClick={()=> navigate('/patch/:id')}>Patch</button> 
                </div>
            </div>
            <div className="h-[1px] w-[80%] ml-[9rem] bg-black" />
        </div>
        </div>
      </div>
    </>
  );
}