// import { useState } from 'react';
// import './SearchBox.css';

// const SearchBox = () => {
//   const [searchLine, setSearchLine] = useState('');

//   const searchLineChangeHandler = (e) => {
//     setSearchLine(e.target.value);
//   };

//   const searchBoxSubmitHandler = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', searchLine);
//   };

//   return (
//     <div className="search-box">
//       <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
//         <label className="search-box__form-label">
//           Искать фильм по названию:
//           <input
//             value={searchLine}
//             type="text"
//             className="search-box__form-input"
//             placeholder="Например, Shawshank Redemption"
//             onChange={searchLineChangeHandler}
//           />
//         </label>
//         <button
//           type="submit"
//           className="search-box__form-submit"
//           disabled={!searchLine}
//         >
//           Искать
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchBox;


import { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [searchLine, setSearchLine] = useState('');

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  const searchBoxSubmitHandler = async (e) => {
    e.preventDefault();

    // API açarını burada düzgün təyin edin
    const apiKey = 'YOUR_API_KEY';  // Düzgün API açarını burada daxil edin
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchLine}&apikey=${apiKey}`
    );

    const data = await response.json();

    if (data.Response === 'True') {
      onSearch(data.Search || []);
    } else {
      console.log('Error fetching data:', data.Error);
    }
  };

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
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
