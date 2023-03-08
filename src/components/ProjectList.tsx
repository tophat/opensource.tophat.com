import React from 'react'

import { useRepositories } from '../hooks/useStars'
import { type Project } from '../projectTypes'

const StarsBadge: React.FC<{ name: string }> = ({ name }) => {
    const repositories = useRepositories()
    const stars = repositories.data?.[name].stars

    return (
        <div
            className="project-stars"
            data-project={name}
            style={{ opacity: stars ? 1 : 0 }}
        >
            <i className="fas fa-star"></i>
            <span className="count">{stars}</span>
        </div>
    )
}

export const ProjectList: React.FC<{ projects: Project[] }> = ({
    projects,
}) => {
    return (
        <ul id="projects">
            {projects.map((project) => {
                return (
                    <li
                        key={project.name}
                        className="project-card"
                        id={`project-${project.name}`}
                    >
                        <div className="project-logo">
                            <img src={project.logo} alt="" />
                        </div>
                        <h2 className="project-title">{project.title}</h2>
                        <StarsBadge name={project.name} />
                        <p className="project-description">
                            {project.description}
                        </p>
                        <p className="project-links">
                            {project.websiteUrl ? (
                                <a
                                    className="pink link"
                                    href={project.websiteUrl}
                                    aria-label={`${project.title} Website`}
                                >
                                    Website
                                </a>
                            ) : null}
                            <a
                                className="pink link"
                                href={`https://www.github.com/tophat/${project.name}`}
                                aria-label={`${project.title} GitHub`}
                            >
                                GitHub
                            </a>
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}
