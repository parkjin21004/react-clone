import "./styles/main.css";
import Home from "./routes/Home";

const basename =
  process.env.NODE_ENV === "production" ? "/react-clone-movie" : "/";

function App() {
  return <Home></Home>;
}

export default App;
