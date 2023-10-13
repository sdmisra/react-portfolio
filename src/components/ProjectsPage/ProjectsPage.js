import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import '../ProjectsPage/ProjectsPage.css'

const ProjectsPage = ()=> {

  const ProjectArray = {
    'anthems' : 
    {title : 'Avian Anthems', size: '4', mod : '3rd', 
      tech: ['React', 'TypeScript', 'Cypress', 'OOP']
    },
    'chronicles' : 
    {title : 'Mars Chronicles', size: '4', mod : '3rd', 
      tech : ["React", "Redux", "Cypress", 'Functional']
    },
    'hyperloom' : 
    {title: 'Hyper Loom', size: '7', mod : '4th', 
      tech: ['React', 'Redux', 'Cypress', 'Functional']
    }
  }

  return (
    <>
    <div className='project-browser left-side'>
      <ProjectCard project={ProjectArray['anthems']}/>
      <ProjectCard project={ProjectArray['chronicles']}/>
      <ProjectCard project={ProjectArray['hyperloom']}/>
    </div>
    <div className='focus-window right-side'>
      <h1>Please choose a project on the left for details</h1>
    </div>
    </>
  )
}

export default ProjectsPage;