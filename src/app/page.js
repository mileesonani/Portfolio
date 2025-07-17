import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import Homepage from "../../components/Homepage";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <>
      <main className="text-font_color sm:overflow-x-visible overflow-x-hidden">
        <div className="fixed w-[100%] z-[100000] bg-primary">
          <Header />
        </div>
        <ul className="xl:mx-[13%] sm:mx-[10%] mx-[1.5rem]">
          <li><Homepage /></li>
          <li><About /></li>
          <li><Experience /></li>
          <li><Projects /></li>
          <li><Skills /></li>
          <li><Contact /></li>
        </ul>
      </main>
    </>
  )
}