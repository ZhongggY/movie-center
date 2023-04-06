import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path=""
          element={
            <MovieList apiPath="movie/now_playing" title="Home"></MovieList>
          }
          t
        ></Route>
        <Route path="movie/:id" element={<MovieDetail></MovieDetail>}></Route>
        <Route
          path="movie/popular"
          element={
            <MovieList
              apiPath="movie/popular"
              title="Popular Movies"
            ></MovieList>
          }
        ></Route>
        <Route
          path="movie/tops"
          element={
            <MovieList apiPath="movie/top_rated" title="Top Movies"></MovieList>
          }
        ></Route>
        <Route
          path="movie/newly"
          element={
            <MovieList
              apiPath="movie/upcoming"
              title="Upcoming Movies"
            ></MovieList>
          }
        ></Route>
        <Route
          path="search"
          element={<Search apiPath="search/movie"></Search>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
};
