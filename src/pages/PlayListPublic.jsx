import { useEffect, useState } from "react";
import PublicLayout from "./components/playlists/PublicLayout";
import { AddIcon2, Share } from "./components/icons/Svgs";
import { axiosMusic } from "../utils/configAxios";
import { useNavigate, useParams } from "react-router-dom";
import TrackCard from "./components/shared/TrackCard";
import SpotifySong from "./components/shared/SpotifySong";

const PlayListPublic = () => {
  const [isShowFront, setisShowFront] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const { id } = useParams();
const [currentSong, setCurrentSong] = useState(null)
const navigate = useNavigate()

  const playTrack = (idTrack) => {
    setCurrentSong(idTrack)
  }

  const handleCopyURL = () => {
    const currentURL = window.location.href
    navigator.clipboard.writeText(currentURL).then(() => alert("Copiado en el portapapeles"))
  }

  const handleAdd = () => {
   const confirm = window.confirm("Para crear tu playlist debes registrate, quieres crearte una cuenta?")
    if (confirm){
     navigate("/register")
    }
  }

  console.log(playlist);
  useEffect(() => {
    axiosMusic
      .get(`api/playlists/${id}`)
      .then(({ data }) => {
        setPlaylist(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <PublicLayout>
      <article
        className={` top-24 right-10 grid justify-center p-4 rounded-md font-semibold group  transition-all`}
      >
        <div className={`relative cassette ${isShowFront ? "front" : "back"}`}>
          {/*  cassete frontal */}
          <div className="front">
            <img src="/img/frenteCassette.png" alt="" />
            <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px]">
              <h3 className="bg-transparent flex-1 outline-none text-black">
                {playlist?.title}
              </h3>
            </div>

            <button onClick={handleCopyURL}
              type="button"
              className="absolute bottom-4 right-4  p-[3px]"
            >
              <Share />
            </button>
            <button onClick={handleAdd} className="absolute bottom-[19px] right-16 p-[3px] border-2 rounded-full grid place-content-center w-[37px] h-[37px]">
              <AddIcon2 />
            </button>
          </div>
          {/* trasera */}
          <div className="absolute top-0 back">
            <img src="/img/frenteCassette.png" alt="" />
            <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] text-sm">
              <span className="bg-transparent flex-1 outline-none text-black">
                {playlist?.to}
              </span>
            </div>

            <div className="bg-white p-1  w-[197px] absolute top-[50px] left-[20px] text-sm text-black h-[100px] overflow-y-auto">
              <p>{playlist?.message}</p>
            </div>
          </div>
        </div>
        <button
          className="border-2 my-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors"
          onClick={() => setisShowFront(!isShowFront)}
        >
          {isShowFront ? "Lado A" : "lado B"}
        </button>
      </article>

{
  currentSong && 
  <SpotifySong idTrack={currentSong}/>
}

      <section>
        {playlist?.tracks.map((track) => (
          <TrackCard key={track.id} track={track} playTrack={playTrack} />
        ))}
      </section>
    </PublicLayout>
  );
};
export default PlayListPublic;
