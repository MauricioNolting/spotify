import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import PlayListPublic from './pages/PlayListPublic'
import Home from './pages/Home'
import PlayList from './pages/PlayList'
import PlayListDetail from './pages/PlayListDetail'
import TrackDetail from './pages/TrackDetail'
import ArtistDetail from './pages/ArtistDetail'
import Page404 from './pages/Page404'
import PrivateRoutes from './pages/components/layouts/auth/PrivateRoutes'

function App() {


  return (
    <>
    
      <Routes>
        {/* RUtas publicas */}
        <Route  path="/login" element={<Login />}/>
        <Route  path='/register' element={<Register />}/>
        <Route  path='/playlist/public/:id' element={<PlayListPublic />}/>

        {/* Rutas privadas */}
        <Route element={<PrivateRoutes/>}>
        <Route  path='/' element={<Home />}/>
        <Route  path='/playlist' element={<PlayList />}/>
        <Route  path='/playlistdetail/:id' element={<PlayListDetail />}/>
        <Route  path='/tracks/:id' element={<TrackDetail />}/>
        <Route  path='/artists/:id' element={<ArtistDetail />}/>
        </Route>


        <Route  path='*' element={<Page404 />}/>
      </Routes>
    </>
  )
}

export default App
