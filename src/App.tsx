import { NavBar } from "./components/NavBar/NavBar";
import { Experience } from "./routes/Experience/Experience";
import { Home } from "./routes/Home/Home";
import { Projects } from "./routes/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
