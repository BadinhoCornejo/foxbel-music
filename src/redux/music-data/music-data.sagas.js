import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import MusicDataActionTypes from "./music-data.types";

import { fetchMusicDataSuccess } from "./music-data.actions";

const headers = {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "7592a0e74fmsh824c5df3bf96003p153394jsncaf6c1d91801",
};

const getMusicData = (searchQuery) =>
  axios({
    url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`,
    method: "get",
    headers: headers,
  })
    .then((response) => response)
    .catch((error) => error);

export function* fetchMusicDataAsync({ payload }) {
  const defaultData = {
    data: { data: [] },
  };
  try {
    if (payload.length) {
      const data = yield call(getMusicData, payload);
      yield put(fetchMusicDataSuccess(data));
    } else {
      yield put(fetchMusicDataSuccess(defaultData));
    }
  } catch (error) {
    yield put(fetchMusicDataSuccess(defaultData));
  }
}

export function* onFetchMusicDataStart() {
  yield takeLatest(
    MusicDataActionTypes.FETCH_MUSIC_DATA_START,
    fetchMusicDataAsync
  );
}

export function* musicDataSagas() {
  yield all([call(onFetchMusicDataStart)]);
}
