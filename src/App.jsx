import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/:id" element={<ListPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
