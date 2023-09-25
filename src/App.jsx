import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/Login-page";
import RegisterPage from "./pages/register-page";
import NotFound from "./pages/404";
import ProfilePage from "./pages/profile-page";
import HomePageKandidat from "./pages/home-page-kandidat";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/kandidat" element={<HomePageKandidat />} />
      </Routes>
    </Router>
  );
};

export default App;
