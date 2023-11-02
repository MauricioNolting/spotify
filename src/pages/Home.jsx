
import { SearchIcon } from "./components/icons/Svgs"
import { useEffect, useState } from "react"
import { axiosMusic } from "../utils/configAxios"
import TrackasList from "./components/shared/TrackasList"
import PrincipalLayout from "./components/layouts/PrincipalLayout"

const Home = () => {

const [tracksRecomendations, setTracksRecomendations] = useState([])
const [searchTracks, setSearchTracks] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const limit = formData.get("limit")
    const query = formData.get("query")

    axiosMusic
    .get(`/api/tracks?limit=${limit}&q=${query}`)
    .then(({data}) => {
        setSearchTracks(data.tracks.items)})
    .catch((err) => {setSearchTracks([]); console.log(err)})
    
}

useEffect(() => {
 axiosMusic
 .get("/api/tracks/recommendations?seed_genres=reggae,rock,salsa,latino")
 .then(({data})=> setTracksRecomendations(data.tracks)
 )
 .catch((err) => console.log(err))
}, [])
  return (
   <PrincipalLayout>
                <form onSubmit={handleSubmit} className="bg-white/20 p-4 px-4 flex gap-4 items-center rounded-md" action="">
                    <button>
                        <SearchIcon/>
                    </button>
                    <input className="bg-transparent outline-none flex-1" type="text" placeholder="Buscar" name="query" size={8} autoComplete="off"/>
                    <select name="limit" className="bg-transparent [&>option]:text-black" id="">
                        <option>5</option>
                        <option>7</option>
                        <option>10</option>
                        <option>12</option>
                    </select>
                </form>
                <TrackasList tracks={searchTracks.length !== 0 ? searchTracks: tracksRecomendations}/>
           
    </PrincipalLayout>
  )
}
export default Home