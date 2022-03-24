import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actionType from '../constants/ActionTypes';
import { call } from 'redux-saga/effects'

const BASE_URL = 'API';

async function getContentInfoApi(columnId) {
  const response = await fetch(`${BASE_URL}/CONTENTLISTINGPAGE-PAGE${columnId}.json`);
  const data = await response.json();
  return data;
}

function* getContentList(action) {
  try {
    const { pageNo, searchText } = action.data;
    const list = yield call(getContentInfoApi, pageNo);
    let { page: { 'content-items': contentItems, ...pageMeta } } = list;

    contentItems.content = contentItems.content.filter(item => item.name.trim().toLowerCase().includes(searchText));

    const response = {
      content: contentItems.content,
      ...action.data,
      hasMore: !!(pageMeta['page-size-requested'] * pageMeta['page-num-requested'] < pageMeta['total-content-items']),
    }
    yield put({ type: actionType.FETCH_CONTENT_SUCCEEDED, ...response });
  } catch (e) {
    yield put({ type: actionType.FETCH_CONTENT_FAILED, message: e.message });
  }
}


function* fetchContentSaga() {
  yield takeEvery(actionType.FETCH_CONTENT, getContentList);
}


export default function* rootSaga() {
  yield fork(fetchContentSaga);
}