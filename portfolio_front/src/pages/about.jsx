import AboutMe from "../components/about/AboutMe";
import Skills from "../components/about/skills";
import "../components/about/AboutMe.css";
import "../components/about/skills.css";
import { skills } from '../data/skills'
import Timeline from '../components/about/Timeline'
import SocialButtons from '../components/common/SocialButtons'



function About() {
  return (
    <div>
      <AboutMe />
      <Timeline />
      <Skills skills={skills} />
      <SocialButtons />
    </div>
  )
}

export default About