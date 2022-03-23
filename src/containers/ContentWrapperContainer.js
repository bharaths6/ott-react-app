import { connect } from 'react-redux';
import ContentWrapper from 'components/ContentWrapper';
import { fetchContent } from 'actions/UserActions';

const mapStateToProps = (state) => {
  const { contentList } = state;
  const { page: { 'content-items': { content } } } = contentList;
  return {
    contentInfo: content,
    currentPage: contentList.pageNo,
    hasMore: contentList.hasMore,
    searchText: contentList.searchText,
  }
};

const mapDispatchToProps = (dispatch) => (({
  fetchContent: (data) => {
    dispatch(fetchContent(data));
  }
}));

const ContentWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentWrapper);

export default ContentWrapperContainer;