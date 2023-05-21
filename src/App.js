import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Filter from "./pages/Filter";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="counter"
          element={<Counter />}
        />
        <Route
          path="filter"
          element={<Filter />}
        />
      </Routes>
    </div>
  );
}

export default App;
