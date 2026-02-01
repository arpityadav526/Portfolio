import { projects } from '../data/projects'
import ProjectGrid from '../components/projects/ProjectGrid'
import SocialButtons from '../components/common/SocialButtons'
import './projects.css'

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Check out some of my recent work</p>
      </div>
      <ProjectGrid projects={projects} />
      <SocialButtons />
    </div>
  )
}

export default Projects