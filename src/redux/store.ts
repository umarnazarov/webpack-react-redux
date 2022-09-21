import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/userService";
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  userReducer,
  [postsApi.reducerPath]: postsApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (defaultMidleware) => defaultMidleware().concat(postsApi.middleware)
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export {
  AppStore,
  RootState,
  AppDispatch
}

