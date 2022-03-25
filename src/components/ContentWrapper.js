import InfiniteScroll from 'react-infinite-scroller';
import Tile from 'components/Tile';

export default function ContentWrapper(props) {

    const { fetchContent, contentInfo, currentPage, hasMore, searchText } = props;

    const loadFunc = () => {
        fetchContent({
            pageNo: currentPage + 1,
            searchText
        });
    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
        >
            {!!contentInfo.length ?
                <div className="grid grid-cols-3 pt-14 gap-x-1p8 content-start">
                    <Tile contentList={contentInfo} />
                </div> :
                <div className="fixed inset-0 m-auto h-16 text-center leading-10">No Content Found</div>
            }
        </InfiniteScroll>
    );
}