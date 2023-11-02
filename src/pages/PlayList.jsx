import { useEffect, useState } from "react"
import { SearchIcon } from "./components/icons/Svgs"
import PrincipalLayout from "./components/layouts/PrincipalLayout"
import { axiosMusic } from "../utils/configAxios"
import PlayListslist from "./components/playlists/PlayLists.list"

const PlayList = () => {
const [playlists, setPlaylists] = useState([])

console.log(playlists)
useEffect(() => {
axiosMusic
.get("/api/playlists/me")
.then(({data}) => setPlaylists(data))
.catch((err) => console.log(err))
},[])
  return (
    <PrincipalLayout>
        <form className="bg-white/20 p-4 px-4 flex gap-4 items-center rounded-md" action="">
                    <button>
                        <SearchIcon/>
                    </button>
                    <input className="bg-transparent outline-none flex-1" type="text" placeholder="Buscar" name="query" size={8} autoComplete="off"/>
                </form>
                <PlayListslist playlists={playlists}/>
    </PrincipalLayout>
  )
}
export default PlayList