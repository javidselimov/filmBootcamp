# Module 4 project – Movie organizer.

Algoritmika Coding Bootcamp-da Modul 4 layihəsi üçün başlanğıc

## Necə run etmək
```
npm install
cd FilmOrqonayzeriM4
npm start
y/n => yes
```

## Redux Toolkit İstifadəsi: Təqdimat
Giriş: Redux Nədir?
Redux, tətbiqlərin vəziyyətini (state) idarə etmək üçün istifadə olunan JavaScript kitabxanasıdır. Tətbiqinizin böyük və mürəkkəb vəziyyətini (data) daha asan idarə etmək üçün Redux çox faydalıdır. Amma Redux, tətbiqin vəziyyətini idarə etmək üçün bəzi əsas prinsiplər təklif etsə də, bəzi məsələlər (məsələn, boilerplate kodu) problemi yarada bilər.

Redux Toolkit (RTK), bu problemi həll etmək üçün yaradılmışdır. Redux Toolkit, Redux istifadə etməyin daha sürətli, daha sadə və daha az kodla həyata keçirilməsini təmin edir. O, Redux ilə əlaqəli ən çox istifadə olunan əməliyyatları daha asan və sürətli şəkildə icra etməyə imkan verir.

## Redux Toolkit-ə Nə Üçün Keçirik?
Kod Həcminin Azalması: Redux ilə işləyərkən çox təkrarlanan kod yazılır. Redux Toolkit, boilerplate kodunu avtomatik azaldır.
Yüksək Performans: createSlice, createAsyncThunk və digər alətlər sayəsində performans daha yaxşı təmin edilir.
Daha Sadə API: Redux Toolkit ilə istifadə olunan API-lər sadə və daha intuitivdir.
Kodun Təhlükəsizliyi: Daha az səhv etmə ehtimalı olan bir yazılım təcrübəsi.
Redux Toolkit Qurulumu
Redux Toolkit-i layihədə istifadə etmək üçün əvvəlcə onu layihəyə əlavə etmək lazımdır. Bunun üçün terminalda aşağıdakı əmrləri istifadə edə bilərsiniz:


<!-- npm install @reduxjs/toolkit react-redux -->
react-redux da layihəyə əlavə olunur, çünki Redux ilə React-i əlaqələndirmək üçün bu kitabxanadan istifadə olunur.

## Redux Toolkit İstifadəsi: Əsas Konseptlər
1. createSlice
createSlice Redux-un ən əhəmiyyətli alətlərindən biridir. Bu alət, reducer və action-ları bir yerdə idarə etməyə imkan verir.

Misal üçün, bir film siyahısına görə createSlice-in istifadəsini belə göstərə bilərik:

<!-- 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieListName: "",
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },
    setMovieListName: (state, action) => {
      state.movieListName = action.payload;
    }
  }
});

export const { addMovie, deleteMovie, setMovieListName } = favoriteSlice.actions;
export default favoriteSlice.reducer; -->

Bu nümunədə, createSlice iki əsas əməliyyatı bir yerdə yerinə yetirir:

State: İlk başlanğıc vəziyyətini təyin edir (movies, movieListName).
Reducers: Filmlərin əlavə olunması və silinməsi kimi əməliyyatları idarə edir.

2. configureStore
Redux store-un qurulmasında configureStore istifadə olunur. Bu, Redux store-un yaradılmasını çox sadə edir.

<!-- 
import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    favoriteReducer,
  },
});

export default store; -->
Bu, Redux store-u konfiqurasiya edir və favoriteReducer-i store-a daxil edir.

3. createAsyncThunk 
Asinxron əməliyyatlar üçün createAsyncThunk istifadə edilir. Məsələn, API-dən məlumat yükləmək üçün bu alətdən istifadə edə bilərsiniz.


<!-- import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm) => {
    const response = await fetch(`https://api.example.com/movies?query=${searchTerm}`);
    return response.json();
  }
); -->
Bu asinxron əməliyyat API-dən film məlumatlarını əldə etmək üçün istifadə olunur.

## Redux Toolkit İlə Məlumatı Seçmək (useSelector)
React komponentlərində Redux store-dan məlumat seçmək üçün useSelector istifadə olunur:

<!-- 
import { useSelector } from "react-redux";

const MoviesList = () => {
  const movies = useSelector((state) => state.favoriteReducer.movies);
  
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}; -->

Burada useSelector, store-dan favoriteReducer.movies məlumatını əldə edir və bu məlumat komponentdə istifadə olunur.

## Redux Toolkit İlə Məlumatı Göndərmək (useDispatch)
State dəyişdirmək üçün useDispatch hook-u istifadə olunur. Bu hook, action-ları göndərmək üçün istifadə edilir:

<!-- 
import { useDispatch } from "react-redux";
import { addMovie } from "./favoriteSlice";

const AddMovieButton = () => {
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    dispatch(addMovie({ id: 1, title: "Inception" }));
  };

  return <button onClick={handleAddMovie}>Add Movie</button>;
}; -->
Bu nümunədə, "Add Movie" düyməsinə klikləndikdə, addMovie action-u dispatch edilir və film siyahısına yeni bir film əlavə olunur.

## Nəticə: Redux Toolkit ilə İstifadə
Qısa və Anlaşılır Kod: Redux Toolkit ilə Redux-un işlənməsi daha sadə və daha sürətli olur.
Yüksək Performans: Daha yaxşı performans üçün optimizasiya edilmiş alətlər.
Daha Aydın API: createSlice, configureStore və createAsyncThunk kimi funksiyalar ilə API daha sadə və istifadəyə əlverişli olur.
Redux Toolkit istifadə etməklə, çox vaxt sərf edən boilerplate kodunu azaltmaq və tətbiqinizi daha sürətli inkişaf etdirmək mümkündür. Bu, React layihələrində böyük və mürəkkəb vəziyyətləri idarə etməyi asanlaşdırır.



Etdiklerim:
## Favorites.jsx
 İstifadəçinin favorit filmlərini göstərir, film əlavə etməyə və silməyə imkan verir, həmçinin siyahının adını dəyişdirir.
## MovieItem.jsx
 Filmləri göstərir və istifadəçiyə onları favoritlərə əlavə etməyə imkan verir.
## SearchBox.jsx: 
İstifadəçiyə film axtarmağa imkan verir və tapılan filmləri Redux store-a göndərir.
## favoriteReducer.jsx: 
Favorit film siyahısının idarə edilməsi (əlavə etmək, silmək, siyahı adı dəyişdirmək).
## movieReducer.jsx: 
Axtarılan filmləri Redux store-a əlavə edir.