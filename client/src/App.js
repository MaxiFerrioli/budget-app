import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Operation from "./components/Operations/Operations";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/operations" element={<Operation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
