import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContext from './contexts/GlobalContext';

import { useState, useEffect } from 'react';

import axios from "axios";

import DefaultLayout from "./layouts/DefaultLayout";

import Homepage from './pages/Homepage'

function App() {

  const [movies, setMovies] = useState([]);

  const api_key = "d97d4ff55365a734c141e86788450f12";

  function fetchData(query) {
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: api_key,
        query: query
      }
    })
      .then((res) =>
        setMovies(res.data.results)
      )


      .catch((err) => console.error("Errore:", err));

  }


  useEffect(
    () => fetchData(),
    [])

  return (
    <>
      <GlobalContext.Provider value={{ movies, fetchData }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App