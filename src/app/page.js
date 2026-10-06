import Header from "./components/header";
import Main from "./components/main";
import Projects from "./components/projects/projects";
import EngineerProfile from "./components/engineer-profile";
import Experience from "./components/experience";
import BuildLog from "./components/build-log";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Projects />
      <EngineerProfile />
      <Experience />
      <BuildLog />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
