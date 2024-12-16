// }
// } catch (error) {
//   console.error('API sorğusu zamanı xəta:', error);
// }
// };

// return (
// <div className="search-box">
//   <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
//     <label className="search-box__form-label">
//       Искать фильм по названию:
//       <input
//         value={searchLine}
//         type="text"
//         className="search-box__form-input"
//         placeholder="Например, Shawshank Redemption"
//         onChange={searchLineChangeHandler}
//       />
//     </label>
//     <button
//       type="submit"
//       className="search-box__form-submit"
//       disabled={!searchLine}
//     >
//       Искать
//     </button>