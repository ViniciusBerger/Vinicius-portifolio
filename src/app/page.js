import Main from "./components/main.jsx";
import Header from "./components/header.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact.jsx"

export default function Home() {
  return (
    <div className="m-0 bg-[#1A1A1A]">
      <Header />
      <Main />
      <Projects />
      <Contact/>
    </div>
  );
}
