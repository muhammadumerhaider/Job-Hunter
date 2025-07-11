import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ViewDetails from "./pages/ViewDetails";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { JobProvider } from "./contexts/JobContext";

function App() {
  return (
    <JobProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/viewDetails" element={<ViewDetails />} />
        </Routes>
      </main>
    </JobProvider>
  );
}

export default App;
