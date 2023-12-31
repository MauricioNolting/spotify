/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { AddIcon, MinusIcon, PlayIcon } from "../icons/Svgs";
import { addTrack, removeTrack } from "../../../store/slice/playListCart.slice";
import { useDispatch } from "react-redux";



const TrackCard = ({
  track,
  showPlayBtn,
  showAddBtn,
  imageSize = "base",
  showMinusBtn,
  deleteBtn,
  playTrack
}) => {
  const dispatch = useDispatch();
  const handleAddTrack = () => {
    dispatch(addTrack(track));
  };

//eliminar cancion
const hanldeRemoveTrack = () => {
    dispatch(removeTrack(track.id))
}

  // const artists = track.artists.map((artist) => artist.name)
  const imageSizes = {
    base: "w-[58px] h-[58px]",
    sm: "w-[48px] h-[48px]",
  };
///api/playlists/b2b5c7cc-2137-46d7-9376-d2895c8d8758


  return (
    <article className="flex gap-4 items-center hover:bg-white/20 transition-colors rounded-md p-1">
      {/* imagen de la cancion */}
      <div
        className={`${imageSizes[imageSize]} w-[58px] h-[58px] rounded-md overflow-hidden`}
      >
        <img src={track?.album.images[2].url} alt="" />
      </div>
      {/* detalle de la cancion */}
      <div className="flex-1 text-sm grid gap-1">
        <Link
          to={`/tracks/${track.id}`}
          className="font-semibold line-clamp-1 hover:text-secondary transition-colors 
            "
        >
          {track.name}
        </Link>
        <ul>
          {track.artists.slice(0, 2).map((artist, index, array) => (
            <li key={artist.id}>
              <Link
                className="hover:text-secondary transition-colors line-clamp-1"
                to={`/artists/${artist.id}`}
              >
                {artist.name} {array.length - 1 !== index && ","}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* botones */}
      <div className="flex gap-2 pr-2">
        {showPlayBtn && (
          <button>
            <PlayIcon />
          </button>
        )}
        {showAddBtn && (
          <button onClick={handleAddTrack}>
            <AddIcon />
          </button>
        )}

        {showMinusBtn && (
          <button onClick={hanldeRemoveTrack}>
            <MinusIcon />
          </button>
        )}

        {
          deleteBtn && (
            <button onClick={() => deleteBtn(track.id)}>
              <MinusIcon/>
            </button>
          )
        }

        {
          playTrack && 
          <button onClick={() => playTrack(track.spotifyId)}>
            <PlayIcon/>
          </button>
        }
      </div>
    </article>
  );
};
export default TrackCard;
