'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

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
    previewUrl: "https://oniki.net/en/",
    tag: ["All", "Test"],
  },
  {
    id: 4,
    title: "İvmo",
    description: "Project 4 description",
    image: "/images/projects/ivmo-preview.png",
    gitUrl: "",
    previewUrl: "https://ivmo.com/",
    tag: ["All", "Test"],
  },
  {
    id: 5,
    title: "AvFast",
    description: "Project 5 description",
    image: "/images/projects/avfast-preview.jpg",
    gitUrl: "",
    previewUrl: "https://www.avfast.com.tr/",
    tag: ["All", "Test"],
  }
]
const ProjectsSection = () => {
  const [tag, setTag] = useState('All');

  const handelTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )
  return (
    <>
      <h2 className='text-center text-4xl text-white font-bold mt-4 mb-8 md:mb-12'>My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handelTagChange} name='All' isSelected={tag === 'All'} />
        <ProjectTag onClick={handelTagChange} name='Web' isSelected={tag === 'Web'} />
        <ProjectTag onClick={handelTagChange} name='Test' isSelected={tag === 'Test'} />
      </div>
      <div className='grid md:grid-cols-3 gap-8'>{filteredProjects.map((project) =>
        <ProjectCard
          key={project.id}
          imgUrl={project.image}
          title={project.title}
          description={project.description}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />)}
      </div>
    </>
  )
}

export default ProjectsSection