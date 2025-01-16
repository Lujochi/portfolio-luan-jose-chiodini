import { NavBar } from "./components/NavBar/NavBar";
import { Contact } from "./routes/Contact/Contact";
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
      <Contact />
    </>
  );
}

export default App;
