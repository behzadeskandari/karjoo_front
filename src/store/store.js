// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../reducers/index.jsx";

const store = createStore(rootReducer);

export default store;
