import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterSlice";
import { persistedFavTeachersReducer } from "./teachers/favTeachersSlice";
import { persistedAuthUserReducer } from "./auth/authSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  authUser: persistedAuthUserReducer,
  filter: filterReducer,
  favTeachers: persistedFavTeachersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
