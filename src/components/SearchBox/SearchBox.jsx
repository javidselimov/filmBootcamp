import  { useState } from 'react';
import './SearchBox.css';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../app/feautures/movies/moviesSlice';

const SearchBox =()=> {
    const dispatch = useDispatch()
    const [state,setState]=useState({
        searchLine: ''
    })
    const { searchLine } = state;

   
    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(state)
        fetch(`https://omdbapi.com/?s=${searchLine}&apikey=f8def711`).then(res=>res.json()).then((data)=>{
            dispatch(getMovies(data.Search));
            console.log(data.Search)
        })
    }
    

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={()=>searchBoxSubmitHandler()}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox;