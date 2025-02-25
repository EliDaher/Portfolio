import About from "./component/About"
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import Contact from "./component/Contact"

export default function App() {
  return <>
    <div className="flex flex-col">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  </>
}