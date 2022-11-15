import { useAppContext } from '../../context/appContext'
import { ProjectType } from '../../data/projects'

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { darkMode } = useAppContext()

  return (
    <div className="project-card">
      <a
        className="project-card__link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="project-card__img-div">
          <img
            className="project-card__img"
            src={darkMode ? project.imgDark : project.imgLight}
            alt="Project Preview"
          />
        </div>
      </a>
      <h1 className="project-card__title">{project.name}</h1>
      <p className="project-card__description">{project.description}</p>
    </div>
  )
}

export default ProjectCard
