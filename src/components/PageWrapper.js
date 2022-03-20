import ContentWrapperContainer from 'containers/ContentWrapperContainer';
import SearchComponent from 'components/SearchComponent';

export default function PageWrapper() {

    return (
        <>
            <div className="grid grid-cols-1 content-start fixed bg-navBarImg bg-contain h-24">
                <SearchComponent />
            </div>
            <div className="h-screen no-scrollbar pl-1p8 pr-1p8">
                <ContentWrapperContainer />
            </div>
        </>
    );
}