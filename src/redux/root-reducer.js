import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import musicDataReducer from "./music-data/music-data.reducer";
import songReducer from "./song/song.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "musicData", "song"],
};

const rootReducer = combineReducers({
  user: userReducer,
  musicData: musicDataReducer,
  song: songReducer,
});

export default persistReducer(persistConfig, rootReducer);
