import {configureStore} from "@reduxjs/toolkit";
import MenuSlice from "./Menu/Slice/MenuSlice.js";
import TableSlice from "./Table/Slice/TableSlice.js";

const store = configureStore({
    reducer:{
        menu : MenuSlice.reducer,
        table : TableSlice.reducer
    }
})

export default store;