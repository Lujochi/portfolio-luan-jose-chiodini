import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./routes/Home/Home";
import { Projects } from "./routes/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
    </>
  );
}

export default App;
