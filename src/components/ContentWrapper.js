import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Tile from 'components/Tile';

export default function ContentWrapper(props) {

    const { fetchContent, contentInfo, currentPage, hasMore } = props;

    const loadFunc = () => {
        fetchContent({
            pageNo: currentPage + 1,
        });
    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <div className="grid grid-cols-3 pt-20 gap-1p8 content-start">
                {contentInfo.length && <Tile contentList={contentInfo} />}
            </div>
        </InfiniteScroll>
    );
}