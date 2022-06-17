import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bottom from "./components/Bottom";
import Adminpage from "./components/Adminpage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Adminpage />} />
        </Routes>

        <Main />
        <Bottom />
        <Footer />
      </Router>
    </>
  );
}

export default App;
