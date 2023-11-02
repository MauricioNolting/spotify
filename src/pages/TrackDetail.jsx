import { Link, useParams } from "react-router-dom"
import PrincipalLayout from "./components/layouts/PrincipalLayout"
import { useEffect, useState } from "react"
import { axiosMusic } from "../utils/configAxios"
import TrackCard from "./components/shared/TrackCard"

const TrackDetail = () => {
//tomar el url de donde estamos para hacer la peticion con ese url que seraie l id de la misma
  const { id } = useParams()
  const [track, setTrack] = useState([])

  useEffect(() => {
    axiosMusic
    .get(`/api/tracks/${id}`)
    .then(({data}) => {setTrack(data)
    console.log(data)})
    .catch((err) => console.log(err))
  }, [id])

console.log(id)
  return (
    <PrincipalLayout>
      <Link className="text-secondary" to={-1}> {"<"} Atrás</Link>
      <header className="grid gap-4 mb-8 sm:grid-cols-2 sm:items-center">
        <div>
          <img className="block mx-auto" src={track?.album?.images?.[0].url} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <h3 className="font-semibold">{track?.name}</h3>
            </li>
            {/* <ul className="flex gap-2">
                {
                    track?.artists?.slice(0, 2)?.map((artist, index, array) => (
                        <li key={artist.id}>
                            <Link className="hover:text-secondary transition-colors line-clamp-1" to={`/artists/${artist.id}`}>
                                {artist.name} {array.length - 1 !== index && ","}</Link>
                        </li>
                    ))
                }
            </ul> */}
            <li className="text-slate-400"><span className="font-semibold text-white">Disco:</span>{track?.album.name}</li>
            <li className="text-slate-400"><span className="font-semibold text-white">Fecha de salida:</span>{track?.album.release_date}</li>
          </ul>
        </div>
      </header>

      <section>
        <h4 className="text-base font-semibold uppercase">Recomendations</h4>
        <div>
          {
            track?.relatedSongs.map((relatedTrack) => <TrackCard key={relatedTrack.id} track={relatedTrack} showAddBtn/>)
          }
        </div>
      </section>
    </PrincipalLayout>
  )
}
export default TrackDetail