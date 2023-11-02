import { useEffect, useRef, useState } from "react"
import PrincipalLayout from "./components/layouts/PrincipalLayout"
import { PencilIcon, VectorIcon, Crash, Share } from "./components/icons/Svgs"
import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosMusic } from "../utils/configAxios"
import TrackCard from "./components/shared/TrackCard"

const PlayListDetail = () => {

const [isShowFront, setIsShowFront] = useState(true)
const {id} =  useParams()
const formRef = useRef(null)
const [playlist, setPlaylist] = useState(null)
const navigate = useNavigate()

useEffect(() => {
 axiosMusic
 .get(`api/playlists/${id}`)
 .then(({data}) => {
  setPlaylist(data)
  formRef.current.message.value = data.message
  formRef.current.title.value = data.title
  formRef.current.to.value = data.to
})
 .catch((err) => console.log(err))
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  const data = {
    title: e.target.title.value,
    to: e.target.to.value,
    message: e.target.message.value,
  }

  axiosMusic
  .patch(`api/playlists/${id}`, data)
  .then(({data}) => console.log(data))
  .catch((err) => console.log(err))
}

const deleteTrack = (idTrack) => {
  axiosMusic
  .delete(`api/playlists/${playlist.id}/tracks/${idTrack}`)
  .then(() => {
    const playlistCopy = structuredClone(playlist)
    playlistCopy.tracks = playlistCopy.tracks.filter((track) => track.id !== idTrack)
    setPlaylist(playlistCopy)
  })
  .catch((err) => console.log(err))
}

  const deletePlaylist = () => {
    axiosMusic
    .delete(`/api/playlists/${id}`)
    .then(() => {
      alert("Playlist eliminada correctamente")
      navigate("/playlist")
    }
    )
    .catch((err) => console.log(err))
  }

 

  return (
    <PrincipalLayout>
      <form onSubmit={handleSubmit} ref={formRef}
      className={` top-24 right-10 grid justify-center uppercase p-4 rounded-md font-semibold group  transition-all`}
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
          <button type="submit" className="absolute bottom-4 left-5  p-[3px]"><VectorIcon/></button>
          <button onClick={deletePlaylist} type="button" className="absolute bottom-4 left-[60px]  p-[3px]"><Crash/></button>
          <Link to={`/playlist/public/${playlist?.id}`} target="_blank" type="button" className="absolute bottom-4 right-5  p-[3px]"><Share/></Link>
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

          
          <div className="bg-white flex p-1 items-center w-[197px] absolute top-[50px] left-[20px] text-sm">
            <textarea name="message" className="resize-none text-black" rows={4} placeholder="Mensaje"/>
            
          </div>
        </div>
      </div>
      <button className="border-2 my-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors" onClick={() => setIsShowFront(!isShowFront)}>
        {
            isShowFront ? "Lado A" : "lado B"
        }
      </button>
        

     
    </form>

    <section>
      {
        playlist?.tracks.map((track) => <TrackCard key={track.id} track={track} deleteBtn={deleteTrack} /> )
      }
    </section>
      </PrincipalLayout>
  )
}
export default PlayListDetail
