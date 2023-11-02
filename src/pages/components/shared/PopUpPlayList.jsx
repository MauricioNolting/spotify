/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PopUpPlayList.css";
import { PencilIcon } from "../icons/Svgs";
import { useDispatch, useSelector } from "react-redux";
import TrackCard from "./TrackCard";
import { axiosMusic } from "../../../utils/configAxios";
import { clearTracks } from "../../../store/slice/playListCart.slice";

const PopUpPlayList = ({ isShowPlayList }) => {
  const [isShowFront, setisShowFront] = useState(true);
  const dispatch = useDispatch()

  console.log(isShowPlayList)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        title: e.target.title.value,
        to: e.target.to.value,
        message: e.target.message.value,
        tracks: tracks
    }
    console.log(data)

    axiosMusic
      .post("/api/playlists", data)
      .then(() =>{
        e.target.reset()
        dispatch(clearTracks())
        alert("Playlist creada correctamente")
      } )
      .catch((err) => console.log(err))
  }

  const tracks = useSelector((store) => store.playListCart.tracks)
console.log(tracks)
  return (
    <form
    onSubmit={handleSubmit}
      className={`fixed top-24 right-10 bg-primary-light grid uppercase p-4 rounded-md font-semibold group border border-secondary ${
        isShowPlayList ? "right-10" : "-right-96"
      } transition-all`}
    >
      <div className={`relative cassette ${isShowFront ? "front" : "back"}`}>
        {/*  cassete frontal */}
        <div className="front">
          <img src="/img/frenteCassette.png" alt="" />
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px]">
            <input
              size={10}
              className="bg-transparent flex-1 outline-none text-black"
              placeholder="Título"
              id="to"
              name="to"
              type="text"
            />
            <label htmlFor="to">
              <PencilIcon />
            </label>
          </div>
        </div>
        {/* trasera */}
        <div className="absolute top-0 back">
          <img src="/img/frenteCassette.png" alt="" />
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] text-sm">
            <input
              size={10}
              className="bg-transparent flex-1 outline-none text-black"
              placeholder="Destinatario"
              id="title"
              type="text"
            />
            <label htmlFor="title">
              <PencilIcon />
            </label>
          </div>
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[50px] left-[20px] text-sm">
            <textarea name="message" className="resize-none text-black" rows={4} placeholder="Mensaje"/>
            
          </div>
        </div>
      </div>
      <button className="border-2 my-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors" onClick={() => setisShowFront(!isShowFront)}>
        {
            isShowFront ? "Lado A" : "lado B"
        }
      </button>
        <section className="normal-case font-normal  w-[238px] max-h-[200px] overflow-y-auto">
      {
        tracks.map((track) => <TrackCard key={track.id} track={track} imageSize="sm" showMinusBtn/>)
      }
      </section>

      <button className="border-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors">Crear</button>
    </form>
  );
};
export default PopUpPlayList;
