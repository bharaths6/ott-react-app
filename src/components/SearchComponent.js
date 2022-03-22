import ImgBack from 'assets/Slices/Back.png'
import imgSearch from 'assets/Slices/search.png'

export default function SearchComponent() {

    return (
        <form className="w-screen" >
            <div className="flex items-center py-2 px-4">
                <img src={ImgBack} className="w-7" />

                <input className="appearance-none text-fs-a bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="Type here to search..."
                />
                <img src={imgSearch} className="w-7" />
            </div>
        </form>
    );
}