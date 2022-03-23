import { FETCH_CONTENT_SUCCEEDED, SEARCH_TEXT_CHANGE } from '../constants/ActionTypes';

const initialState = {
  'page': {
    'content-items': {
      'content': []
    }
  },
  pageNo: 0,
  searchText: '',
  hasMore: true,
};

export default function contentList(prevState = initialState, action) {
  let state = prevState;
  switch (action.type) {
    case FETCH_CONTENT_SUCCEEDED:
      state = {
        ...state,
        page: {
          ...state.page,
          'content-items': {
            ...state.page['content-items'],
            content: [
              ...state.page['content-items'].content,
              ...action.content
            ]
          }
        },
        pageNo: action.pageNo,
        hasMore: action.hasMore
      }
      return state;
    case SEARCH_TEXT_CHANGE:
      state = { ...initialState, searchText: action.data }
      return state;
    default:
      return state;
  }
}