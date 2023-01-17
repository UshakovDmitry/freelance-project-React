import { Routes, Route, Link } from "react-router-dom";
import "./components/Layout/Header.css";

import About from "./pages/About.js";
import Cities from "./pages/Cities.js";
import Studios from "./pages/Studios.js";
import ForModels from "./pages/ForModels.js";
import Vacancies from "./pages/Vacancies";
import Layout from './components/Layout/Layout.js'

function App() {
  return (
    <>
      <Routes>
      <Route panh="/" element={<Layout />}>
        <Route path="/studios" element={<Studios />}>
          Студии
        </Route>
        <Route path="/cities" element={<Cities />}>
          Города
        </Route>
        <Route path="/vacancies" element={<Vacancies />}>
          Вакансии
        </Route>
        <Route path="/formodels" element={<ForModels />}>
          Для моделей{" "}
        </Route>
        <Route path="/about" element={<About />}>
          О нас
        </Route>
      </Route>
      </Routes>
    </>
  );
}

export default App;
