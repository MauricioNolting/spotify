import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";
import playListCartSlice from "./slice/playListCart.slice";

export default configureStore({
    reducer: {
        user: userSlice,
        playListCart: playListCartSlice,
    }
})

