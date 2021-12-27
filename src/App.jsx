import Intro from "./components/intro/intro";
import About from "./components/about/about";
import BlogList from "./components/blogList/blogList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
const App = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <BlogList />
      <Contact />
    </div>
  );
};

export default App;
