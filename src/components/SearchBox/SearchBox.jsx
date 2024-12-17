
import  { useState } from 'react';
import './SearchBox.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions';

const SearchBox =()=> {
    const dispatch = useDispatch();
    

    const [searchLine,setSearchLine] = useState('');
    const searchLineChangeHandler = (e) => {
        setSearchLine( e.target.value );
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        if(searchLine){
            dispatch(fetchMovies(searchLine))
        
        }
        
        
    }
    
        

        return (
            <div className="search-box">
                <form id='name' className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            name='name'
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                            autoComplete='name'
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox; 