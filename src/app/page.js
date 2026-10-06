import Header from "./components/header";
import Main from "./components/main";
import Projects from "./components/projects/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
