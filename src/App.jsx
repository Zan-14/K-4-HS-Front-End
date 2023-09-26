import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import HomePageKandidat from "./pages/home-page-kandidat";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/kandidat" element={<HomePageKandidat />} />
      </Routes>
    </Router>
  );
};

export default App;
