import { useNavigate } from "react-router-dom";

export default function Card({ card }) {


    const navigate = useNavigate()
  return (
    <>
      <div className="card bg-slate-200 h-[45vh]  hover:scale-90 transition-transform border border-slate-400">
        <figure className="h-[60%] truncate">
          <img className="rounded-lg object-cover w-full h-full"
            src={card.imgUrl}
          />
        </figure>
        <div className="w-full h-auto text-black text-[15px] flex justify-center pt-2">{card.title}</div>
        <div className="mt-[40%] h-[15%] w-[40%] flex justify-center hover:scale-110 bg-slate-50 transition-transform rounded-lg border border-slate-500 ml-[28%] mb-5">
            <button className="text-black" onClick={(e)=>{navigate(`/detail/${card.id}`)}}>
                Read More
            </button>
        </div>
      </div>
    </>
  );
}
