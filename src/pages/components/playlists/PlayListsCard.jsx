/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { PencilIcon } from "../icons/Svgs"

//HACER EL BUSCADOR..
const PlayListsCard = ({playlist, index}) => {

    const top = `${index * 48}px` 
  return (
    <li className="absolute text-black font-bold hover:rotate-6 hover:-translate-y-4 transition-transform" style={{ top: top }}>
        <Link to={`/playlistdetail/${playlist.id}`}>
        <div>
        <img src="/img/frenteCassette.png" alt="" />
        </div>
        <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px]">
            <h4 className="flex-1 line-clamp-1">{playlist.title}</h4>
            <PencilIcon/>
        </div>
        </Link>
    </li>
  )
}
export default PlayListsCard