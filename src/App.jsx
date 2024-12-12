import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';
import { Counter } from './features/counter/Counter';
import SearchBox from './components/SearchBox/SearchBox';
// import { Counter } from './features/counter/Counter';

export default function App() {
  
    return (
      <div className="app">
        {/* <Counter/> */}
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/list/:id" element={<ListPage/>} />
        </Routes>
      </div>
    );
  
}

// export default App;
