import { Routes, Route } from "react-router-dom";
import "./components/Layout/Layout.css";

import About from "./pages/About.js";
import Cities from "./pages/Cities.js";
import Studios from "./pages/Studios.js";
import ForModels from "./pages/ForModels.js";
import Vacancies from "./pages/Vacancies";
import Layout from './components/Layout/Layout.js'
import Home from './pages/Home.js';
import Notfoundpage from './pages/Notfoundpage.js'

function App() {
  return (
    <div className="root">
    <div className="page">
      <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="studios" element={<Studios />}/>
        <Route path="cities" element={<Cities />}/>
        <Route path="vacancies" element={<Vacancies />}/>
        <Route path="formodels" element={<ForModels />}/>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<Notfoundpage />} />
      </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
