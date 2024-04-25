// import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore(rootReducer);
export const store = configureStore({
    reducer: rootReducer,
})