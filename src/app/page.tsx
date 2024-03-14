import { Home } from "../components/Home"
import About from "../components/About"
import Skill from "../components/Skill"
import Project from "../components/Project"
import Contact from "../components/Contact"


const page = () => {
  return (
    <main>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  )
}

export default page
