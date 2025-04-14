import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const basename =
  process.env.NODE_ENV === "production" ? "/react-clone-movie" : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
