// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { PlayListIcon } from "../icons/Svgs"
// import PopUpAuth from "../shared/PopUpAuth"
// import PopUpPlayList from "../shared/PopUpPlayList"
// import { Link } from "react-router-dom"

// const PincipalLayout = ({children}) => {

// const [isShowAuth, setIsShowAuth] = useState(false)
// const [isShowPlayList, setIsShowPlayList] = useState(false)
// const tracks = useSelector((store) => store.playlistCart.tracks)

// useEffect(() => {
//     if (isShowPlayList) {
//         if (isShowAuth) setIsShowAuth(false)
//     }
// }, [isShowPlayList]);

// useEffect(() => {
//     if (isShowAuth) {
//         if (isShowPlayList) setIsShowAuth(false)
//     }
// }, [isShowAuth]);


//   return (
//       <section className="bg-dark text-white text-xl font-urbanist h-screen grid  bg-[url(/img/manchaMobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/img/manchaDesktop.png)] transition-all grid-rows-[auto,1fr]">
//       <header className="bg-primary-dark flex justify-between p-4 px-4 items-center">
//        <Link to="/">
//        <h1 className="font-semibold text-lg">GIFT MUSIC</h1></Link>

//         <div className="flex gap-3">
//           <button onClick={() => setIsShowAuth(!isShowAuth)} className={`p-2 px-4 uppercase border transition-all border-secondary rounded-full hover:bg-purple-500/30 text-sm sm:text-md ${isShowAuth && "bg-primary-light"}`}>
//             Mi cuenta
//           </button>
//           <button onClick={() => setIsShowPlayList(!isShowPlayList)} className={`p-2 px-4 uppercase border transition-all border-secondary rounded-full hover:bg-purple-500/30 flex items-center gap-2 ${isShowPlayList && "bg-primary-ligth"}`}>
//             <PlayListIcon />
//             <span className="hidden sm:inline">GRABANDO {tracks.length}</span>
//           </button>
//         </div>
//       </header>

//       <section className="py-14 px-4 overflow-y-auto">
//         <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark py-8 px-6 sm:px-14 rounded-3xl">
//             {children}
//         </main>
//       </section>
// {/* seccion popups */}
//       <PopUpAuth isShowAuth={isShowAuth}/>
//       <PopUpPlayList isShowPlayList={isShowPlayList}/>
//     </section>
//   )
// }
// export default PincipalLayout