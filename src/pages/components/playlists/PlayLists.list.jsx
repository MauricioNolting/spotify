/* eslint-disable react/prop-types */
import PlayListsCard from "./PlayListsCard"

const PlayListslist = ({playlists}) => {
const CASSETTE_HEIGHT = 180
const DELTA = 47
const quantityCassettes = playlists.length


const totalHeight = `${CASSETTE_HEIGHT + (DELTA * (quantityCassettes - 1))}px`

  return (
    <ul  className="relative mt-8 grid place-items-center" style={{height: totalHeight}}> 
      {
        playlists.map((playlist, index) => <PlayListsCard playlist={playlist} key={playlist.id} index={index}/> )
      }
    </ul>
  )
}
export default PlayListslist