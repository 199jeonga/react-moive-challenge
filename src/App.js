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
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieHome />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
