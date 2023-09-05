import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import '../ProjectsPage/ProjectsPage.css'

const ProjectsPage = ()=> {
  return (
    <>
    <div className='project-browser left-side'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
    <div className='focus-window right-side'>
      <h1>Please choose a project on the left for details</h1>
    </div>
    </>
  )
}

export default ProjectsPage;