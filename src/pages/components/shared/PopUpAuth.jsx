/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logOut } from "../../../store/slice/user.slice"


const PopUpAuth = ({isShowAuth}) => {
const dispatch = useDispatch()




const handleLogOut = () => {
    dispatch(logOut())
}

  return (
    <nav className={`fixed top-24 right-10 bg-primary-light grid uppercase p-4 rounded-md font-semibold group border border-secondary ${isShowAuth ? "right-10" : "-right-96"} transition-all`}>
        <Link className="flex gap-2 hover:text-indigo-800  items-center hover:font-semibold" to="/playlist">Mis grabaciones</Link>
        <button onClick={handleLogOut} className="uppercase flex gap-2">Cerrar sesión</button>
    </nav>
  )
}
export default PopUpAuth