import ImgBack from 'assets/Slices/Back.png'
import imgSearch from 'assets/Slices/search.png'

import { searchTextChange } from 'actions/UserActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SearchComponent() {

    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchTextChange(searchText.trim().toLowerCase()));
    }

    const clearSearch = () => {
        setSearchText('');
        dispatch(searchTextChange(''));
    }

    return (
        <form className="w-screen" onSubmit={handleSubmit}>
            <div className="flex items-center py-2 px-4">
                <img src={ImgBack} className="w-7" onClick={clearSearch} />

                <input className="appearance-none text-fs-a bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" value={searchText} name="search" placeholder="Type here to search..." onChange={e => setSearchText(e.target.value)}
                />
                <img src={imgSearch} className="w-7" onClick={handleSubmit} />
            </div>
        </form>
    );
}