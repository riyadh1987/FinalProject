// It will be the parent component for other 3. It will also contain the function that handles the API request and it will have a function that calls the API during the component's initial rendr

import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./Header/Header";
import { Movie } from "./Movie/Movie";
import { reducerFilm } from "./GlobalReducer/Reducer";
import { Spinner } from "reactstrap";

export const AppContext = React.createContext();

export const Api = (query) => {
  return `https://www.omdbapi.com/?s=${query}&apikey=9fa6eee6`;
};

function App() {
  const [state, dispatch] = useReducer(reducerFilm, { dataTable: [] });
  const [movieList, setMovieList] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("man");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(Api(SearchQuery));
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        setLoading(false);
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
        setLoading(false);
      }
    };
    fetchData();
  }, [SearchQuery]);

  useEffect(() => {
    setMovieList(state.dataTable.Search);
  }, [state.dataTable.Search]);

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <h2>Show your favourite movies</h2>
      <div className="MovieContainer">
        {loading ? (
          <Spinner />
        ) : movieList ? (
          movieList.map((v) => {
            return (
              <>
                <Movie props={v} />
              </>
            );
          })
        ) : SearchQuery.length < 3 ? (
          <>
            <p>
              {" "}
              Please enter more than <b>3 characters</b> in search query{" "}
            </p>
          </>
        ) : (
          <>
            <p>
              {" "}
              Cannot find the movie '<b>{SearchQuery}</b>'{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
