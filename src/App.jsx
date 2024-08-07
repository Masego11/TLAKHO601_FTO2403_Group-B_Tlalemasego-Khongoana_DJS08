
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import "./index.css";
import VanDetail from './components/VansDetail.jsx';
import "./server.js";
import Layout from './components/Layout.jsx';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
export default App
