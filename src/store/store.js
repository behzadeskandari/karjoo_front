// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../reducers/index.jsx";
import { loadState, saveState } from "../IndexDb/PersistState.js";

const configureStore = async () => {
  const persistedState = await loadState();

  const store = createStore(rootReducer, persistedState);

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
