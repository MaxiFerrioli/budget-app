import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OperationEdit from "./components/OperationEdit/OperationEdit";
import Operations from "./components/Operations/Operations";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/operation/edit/:id" element={<OperationEdit />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
