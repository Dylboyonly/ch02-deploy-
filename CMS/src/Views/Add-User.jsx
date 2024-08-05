import { useState } from "react";
import NewDate from "../Components/Date";
import image2 from "../assets/image3.png";
import axios from "axios";
import { BaseUrl } from "../BaseUrl/BaseUrl";

export default function AddUser() {

    const [userName , setUserName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [phoneNumber , setPhoneNumber] = useState()
    const [address , setAddress] = useState()


    async function HandleAddUser( e , userName , email , password , phoneNumber , address){
        e.preventDefault()
        const newUser = {
            username: userName , 
            email,
            password,
            phoneNumber,
            address
        }
        console.log(newUser)
        try {
            const data = await axios.post(`${BaseUrl}/add-user`,newUser,{
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                  },
            })
            console.log(data,"ini udah jadinya ") 
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <div className="h-screen w-full bg-orange-50">
        <div className=" w-[100%] h-[12%] flex">
          <span
            className="text-black text-7xl pt-[3.2%] pl-[67%]"
            id="Titlepage1"
          >
            New User
          </span>
        </div>
        <div className="h-[1rem] w-full flex justify-center">
          <div className="h-[12%] w-[93%] bg-black mt-[15px]" />
        </div>
        <div className="flex w-[93%] h-[85%] gap-5 ml-[3.3rem] justify-center bg-transparent overflow-auto border border-black border-1 rounded mt-2">
          <div className="h-screen w-[100%] mt-[0.3rem] overflow-auto bg-transparent">
            {/* Headers berita */}
            <div className="flex justify-center w-full h-[23%] bg-transparent">
              <div className="w-full h-[100%] flex justify-center items-center bg-transparent">
                <div className="w-[95%] h-full">
                  <div className="flex justify-between h-[20%] w-full bg-transparent">
                    <span className="ml-5 mt-3">
                      <NewDate />
                    </span>
                    <span className="ml-5 mt-3 text-black" id="texthelper">
                      Jakarta , Indonesia
                    </span>
                  </div>
                  <div className="w-full h-[70%] bg-transparent">
                    <div className="h-[5px] w-full bg-black" />
                    <div className="flex justify-start items-center gap-2 mt-1 bg-transparent">
                      <div className="w-[25%] pl-[9vw]">
                        <h1 className="text-black text-1xl" id="texthelper2">
                          Read more about us{" "}
                        </h1>
                        <button
                          className="w-[6rem] mr-[5rem] block border border-black bg-transparent focus:bg-indigo-400 text-black font-semibold rounded-lg text-1xl mt-3"
                          id="textbutton"
                        >
                          About us
                        </button>
                      </div>
                      <h1 className="text-black ml-[4rem] mb-[3rem]">The</h1>
                      <h1 className="text-black text-8xl" id="mainText">
                        Hactive Times
                      </h1>
                      <div className="w-[30%] pl-[9vw]">
                        <h1 className="text-black text-1xl" id="texthelper2">
                          Since 2024
                        </h1>
                        <div className="h-[1px] w-[18%] bg-black mt-1" />
                        <div className="h-[1px] w-[38%] bg-black mt-1" />
                        <div className="h-[1px] w-[58%] bg-black mt-1" />
                      </div>
                    </div>
                    <span
                      className="w-[80%] pl-[25%] mb-[2rem] text-black"
                      id="texthelper"
                    >
                      "Jadilah bagian dari kami dalam membawa perubahan di
                      sektor teknologi Indonesia!"
                    </span>
                    <div className="h-[1px] w-[95%] ml-[2rem] bg-black mt-5" />
                    <div className="h-[2px] w-[95%] ml-[2rem] bg-black mt-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[90%] bg-transparent ml-[5%] rounded mt-1">
              <div className="w-full h-[50%] bg-transparent flex">
                <div className="h-full w-[70%] bg-transparent px-3 py-3">
                  <div className="w-[98%] h-[70%] ml-1">
                    <img className="w-full h-full bg-contain" src="https://static.vecteezy.com/system/resources/previews/022/466/903/large_2x/black-and-white-background-of-us-currency-banknotes-financial-concept-money-background-hundred-dollar-bills-photo.jpg" />
                  </div>
                  <p
                    className="ml-[5%] text-black font-semibold text-[22px] pt-2 mb-1"
                    id="texet4"
                  >
                   U.S. Dollar's Surge Highlights Growing Investor Confidence 
                  </p>
                  <p className="text-slate-500 text-[12px] font-serif font-thin font-light pt-1">
                  The U.S. dollar, a cornerstone of global finance, continues to capture headlines due to its fluctuating value and the broader economic implications it carries. Recent reports highlight the dollar's strength against major currencies, driven by robust economic data and shifts in monetary policy. This volatility is not just a financial metric but a reflection of global economic confidence and geopolitical stability. Analysts point out that changes in the dollar's value can influence everything from international trade dynamics to the stability of emerging markets, making it a critical focus for investors and policymakers alike. As the world watches, the dollar’s performance remains a pivotal factor in shaping global economic trends.
                  </p>
                </div>
                <div className="h-full w-[30%] bg-transparent px-4 py-3 border-l-2 border-slate-700">
                  <div className="w-full h-[57%] bg-transparent">
                    <p
                      className="text-black font-semibold text-[17px] pb-4"
                      id="texet4"
                    >
                    Endangered Species in Focus: Conservation Efforts for World’s Unique Animals
                    </p>
                    <span className="text-slate-500 text-[11px] font-serif font-thin font-light">
                    Animals around the world exhibit a remarkable diversity, from the majestic polar bears of the Arctic to the vibrant parrots of the Amazon rainforest.
                     Each habitat supports unique species adapted to its environment, showcasing nature’s ingenuity in survival and adaptation.
                    </span>
                  </div>
                  <div className="w-[90%] h-[40%] bg-cover rounded ml-[1rem] mt-2">
                    <img className="w-full h-full bg-cover" src="https://images.desenio.com/zoom/15082_2-24882.jpg" />
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-black mt-[2rem]" />
              <div className="h-[3rem] w-full bg-transparent flex justify-around ">
                <div className="text-black text-[20px] pt-1" id="recomended">
                  Reccomended for you
                </div>
                <div className="text-black text-[20px] pt-1 pl-[15%]" id="recomended">
                  Popular news
                </div>
              </div>
              <div className="w-full h-[40%] bg-transparent flex mb-5">
                <div className="w-[40%] h-full bg-transparent overflow-auto px-2 py-2">
                  <div className="w-full h-[20%] bg-transparent">
                    <p
                      className="text-black font-semibold text-1xl"
                      id="texet4"
                    >
                      Dolores
                    </p>
                    <span className="text-slate-500 text-[12px] font-serif font-thin font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum....
                    </span>
                  </div>
                  <div className="h-[1px] w-[80%] bg-transparent" />
                  <div className="w-full h-[20%] bg-transparent">
                    <p
                      className="text-black font-semibold text-1xl"
                      id="texet4"
                    >
                      Dolores
                    </p>
                    <span className="text-slate-500 text-[12px] font-serif font-thin font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum....
                    </span>
                  </div>
                  <div className="h-[1px] w-[80%] bg-black" />
                  <div className="w-full h-[20%] bg-slate-300">
                    <p
                      className="text-black font-semibold text-1xl"
                      id="texet4"
                    >
                      Dolores
                    </p>
                    <span className="text-slate-500 text-[12px] font-serif font-thin font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum....
                    </span>
                  </div>
                  <div className="h-[1px] w-[80%] bg-black" />
                  <div className="w-full h-[20%] bg-slate-400">
                    <p
                      className="text-black font-semibold text-1xl"
                      id="texet4"
                    >
                      Dolores
                    </p>
                    <span className="text-slate-500 text-[12px] font-serif font-thin font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum....
                    </span>
                  </div>
                  <div className="h-[1px] w-[80%] bg-black" />
                  <div className="w-full h-[20%] bg-slate-700">
                    <p
                      className="text-black font-semibold text-1xl"
                      id="texet4"
                    >
                      Dolores
                    </p>
                    <span className="text-slate-500 text-[12px] font-serif font-thin font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum....
                    </span>
                  </div>
                </div>
                <div className="w-[60%] h-auto bg-transparent flex px-2 py-2 border-l-2 border-slate-700">
                  <div className="w-[50%] h-[70%] bg-cover rounded rounded-lg mt-[8%] ml-5">
                    <img className="w-full h-full bg-cover" src="https://www.missionmag.org/wp-content/uploads/2024/04/Homepage_-Banner-Editorial_Balenciaga.jpg" />
                  </div>
                  <div className="w-[40%] h-full px-2 py-2 ml-[3%] bg-transparent pt-[1%] border-b-2 border-slate-700">
                    <p
                      className="text-black font-semibold text-[17px] pb-4"
                      id="texet4"
                    >
                     "Gucci Embraces Diversity with Asian Models in Latest Campaign"
                    </p>
                    <span className="text-slate-500 text-[13px] font-serif font-thin font-light">
                    Gucci’s latest campaigns prominently feature Asian models, underscoring its commitment to diversity and reflecting the brand's global reach. By celebrating Asian beauty, Gucci challenges traditional beauty standards and connects with a wider international audience,
                    </span>
                    <div
                      className="mt-[10%] text-black font-semibold text-[16px]"
                      id="id1"
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[33%] bg-transparent">
                <div className="w-full h-full bg-transparent flex">
                  <div className="w-[60%] h-auto bg-transparent flex px-2 py-2 pr-[2rem]">
                    <div className="w-[50%] h-full px-2 py-2 ml-[3%] bg-transparent border-b-2 border-slate-700">
                      <p
                        className="text-black font-semibold text-[17px] pb-4"
                        id="texet4"
                      >
                        Dwayne 'The Rock' Johnson strikes again !
                      </p>
                      <span className="text-slate-500 text-[13px] font-serif font-thin font-light">
                      Dwayne Johnson, also known as "The Rock," continues to captivate fans with his multifaceted career. Recently, he made headlines for his upcoming role in a highly anticipated action film ....
                      </span>
                      <div
                        className="mt-[20%] text-black font-semibold text-[16px]"
                        id="texet4"
                      >
                        Read More
                      </div>
                    </div>
                    <div className="h-full w-[50%] bg-transparent px-4 py-3 border-t-2 border-slate-700">
                    <div className="w-[90%] h-[55%] rounded ml-[1rem] mt-2 mb-2">
                    <img className="w-full h-full bg-cover rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQex1BoePyLG4z2PLaY2CJG9XZpxuU-cXqwQ&s" />
                  </div>
                  <div className="w-full h-[57%] bg-transparent  border-slate-700">  
                    <p
                      className="text-black font-semibold text-[17px] pb-2"
                      id="texet4"
                    >
                    'Erostica'
                    </p>
                    <span className="text-slate-500 text-[11px] font-serif font-thin font-light">
                    Balenciaga's latest perfume, "Erostica," blends modern sophistication with an avant-garde edge, offering a captivating scent that redefines luxury.
                    </span>
                  </div>
                
                </div>
                  </div>
                  <div className="w-[40%] h-full transparent overflow-auto px-2 py-2 pl-[3%] pr-[3%] pt-[2%] pb-[4%] border-slate-600 border-b-2 ">
                    <div className="text-black text-2xl h-auto w-full pl-[30%] stick" id="recomended">Add User Form</div>
                  <form className="mt-[4vh] w-full h-auto" onSubmit={(e)=>{HandleAddUser( e , userName , email , password , phoneNumber , address)}}>
          <div className="w-full h-auto bg-tranparent mb-[1rem]">
            <label className="block text-black text-[20px] pl-[40%]" id="id1">
              Username
            </label>
            <input
              type="text"
              id="text1"
              placeholder="fatahn_cabs"
              className="w-full px-4 py-3 rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-full h-auto bg-tranparent mb-[1rem]">
            <label className="block text-black text-[20px] pl-[43%]" id="id2">
              Email
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="text2"
              placeholder="index@gmail.com"
              minLength={6}
              className="w-full px-4 py-3 rounded-lg text-black bg-transparent mt-2 border focus:border-black
          focus:bg-transparent focus:outline-none"
            //   onChange={(e) => {
            //     setPassword(e.target.value);
            //   }}
            />
          </div>
          <div className="w-full h-auto bg-tranparent mb-[2rem]">
            <label className="block text-black text-[20px] pl-[41%]" id="id1">
              Password
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="text1"
              placeholder="***"
              className="w-full px-4 py-3 rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none"
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
            />
          </div>
          <div className="w-full h-auto bg-tranparent mb-[2rem]">
            <label className="block text-black text-[20px] pl-[38%]" id="id1">
              Phone Number
            </label>
            <input
            onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              id="text1"
              placeholder="+62-"
              className="w-full px-4 py-3 rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none"
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
            />
          </div>
          <div className="w-full h-auto bg-tranparent mb-[2rem]">
            <label className="block text-black text-[20px] pl-[43%]" id="id1">
              Address
            </label>
            <input
            onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="text1"
              placeholder="Abu Dabhi"
              className="w-full px-4 py-3 rounded-lg bg-transparent text-black mt-2 border focus:border-black
              focus:bg-transparent focus:outline-none"
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
            />
          </div>
          <button
            type="submit"
            className="border border-black w-[7rem] h-[2rem] ml-[37%] rounded rounded-lg text-black"
            // onClick={handleLogin}
          >
            Add User
          </button>
        </form>
                  </div>
                </div>
              </div>
              <div className="">
                <footer className="footer footer-center bg-trasnparent text-base-content p-4">
                  <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">
                      About us
                    </a>
                    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">
                      Contact
                    </a>
                    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">
                      Jobs
                    </a>
                    <a className="link link-hover text-black text-[1xl] font-serif font-thin font-light">
                      Press kit
                    </a>
                  </nav>
                  <nav>
                    <div className="grid grid-flow-col gap-4">
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                      </a>
                    </div>
                  </nav>
                  <aside>
                    <p className="text-black text-1xl font-serif font-thin font-light">
                      Copyright © {new Date().getFullYear()} - All right
                      reserved by ACME Industries Ltd
                    </p>
                  </aside>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
