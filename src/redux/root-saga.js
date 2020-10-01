import { all, call } from "redux-saga/effects";

import { musicDataSagas } from "./music-data/music-data.sagas";

export default function* rootSaga() {
  yield all([call(musicDataSagas)]);
}
