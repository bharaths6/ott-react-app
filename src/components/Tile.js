import fallbackPoster from 'assets/Slices/placeholder_for_missing_posters.png'

export default function Tile({ contentList }) {

    const loadFallbackImage = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = `${fallbackPoster}`
    }

    return (
        <>
            {
                contentList.length && contentList.map(({ name, 'poster-image': posterImage }, index) => (
                    <div className="w-full overflow-hidden m-2  min-h-tile" key={index}>
                        <img className="w-full h-42 object-center" src={`Slices/${posterImage}`} onError={loadFallbackImage} />
                        <div className="py-4">
                            <div className="truncate font-regular text-xl mb-2 text-fs-e" title={name}>{name}</div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}