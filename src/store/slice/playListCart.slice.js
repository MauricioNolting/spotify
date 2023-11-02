import { createSlice } from "@reduxjs/toolkit";

const playListCardSlice = createSlice({
    name: "playListCart",
    initialState: {
        tracks: []
    },
    reducers: {
        addTrack: (state, action) => {
                const newTrack = action.payload
                //TODO hace falta verificar si la cancion ya está agregada
                
                const indexTrack = state.tracks.findIndex((track) => track.id === newTrack.id);

                if (indexTrack === -1) {
                state.tracks.push(newTrack)
            } else {
                return state
            }
        },
        removeTrack: (state, action) => {
            const idTrackDelete = action.payload
            const newTrack = state.tracks.filter((track) => track.id !== idTrackDelete)
            state.tracks = newTrack
        },
        clearTracks: (state) => {
            state.tracks = []
        }
    }
})


export const { addTrack, removeTrack, clearTracks } = playListCardSlice.actions
export default playListCardSlice.reducer