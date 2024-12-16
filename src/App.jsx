import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./common.css";
import { useState } from "react";
import { Results, Lists, SavedId } from "../src/store/ContextApi";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/list/:id",
        element: <ListPage />,
      },
      {
        path: "/allLists",
        element: <ListPage />,
      },
    ],
  },
]);

export default function App() {
  const [results, setResults] = useState([]);
  const [lists, setLists] = useState([]);
  const [savedId, setSavedId] = useState(null);
  return (
    <div className="app">
      <Results.Provider value={{ results, setResults }}>
        <Lists.Provider value={{ lists, setLists }}>
          <SavedId.Provider value={{ savedId, setSavedId }}>
            <RouterProvider router={router}></RouterProvider>
          </SavedId.Provider>
        </Lists.Provider>
      </Results.Provider>
    </div>
  );
}
