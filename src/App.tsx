import "./App.css";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Social } from "./Social";
import { Posts } from "./Posts";
function App() {
  return (
    <>
      <div className="container ">
        <Intro />
        <Social />
        <Skills />
        <Projects></Projects>
        <Posts />
      </div>
    </>
  );
}

export default App;
