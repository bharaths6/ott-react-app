import * as actionType from 'constants/ActionTypes';

export const fetchContent = (data) => ({ type: actionType.FETCH_CONTENT, data });
export const fetchContentSuceeded = (data) => ({ type: actionType.FETCH_CONTENT_SUCCEEDED, data });
export const fetchContentFailed = (err) => ({ type: actionType.FETCH_CONTENT_FAILED, err });