import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Contact />
    </div>
  );
}

export default App;
