import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
  return (
    <section className="section project" id="projects">
      <h1 className="project__title">Projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </section>
  )
}

export default Projects
