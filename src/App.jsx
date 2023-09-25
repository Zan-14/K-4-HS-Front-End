import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageKandidat from "./pages/home-page-kandidat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePageKandidat} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
