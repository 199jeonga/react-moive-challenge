import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieHome from "./routes/MovieHome";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie`}
          element={<MovieHome />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Movie />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
