import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfolio-preview.png",
    gitUrl: "https://github.com/osamasayd/personal-portfolio",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Project 2 description",
    image: "/images/projects/ecommerce-preview.png",
    gitUrl: "https://github.com/osamasayd/ecommerce",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Oniki",
    description: "Project 3 description",
    image: "/images/projects/oniki-preview-guncel-1.jpeg",
    gitUrl: "",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "İvmo",
    description: "Project 4 description",
    image: "/images/projects/ivmo-preview.png",
    gitUrl: "",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "AvFast",
    description: "Project 5 description",
    image: "/images/projects/avfast-preview.jpg",
    gitUrl: "",
    previewUrl: "",
    tag: ["All", "Web"],
  }
]
const ProjectsSection = () => {
  return (
    <>
      <h1 className='text-4xl text-white font-bold mb-4'>My Projects</h1>
      <div>{projectsData.map((project) => <ProjectCard key={project.id} imgUrl={project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}</div>
    </>
  )
}

export default ProjectsSection