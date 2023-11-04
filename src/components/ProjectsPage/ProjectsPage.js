import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectDetails  from '../ProjectDetails/ProjectDetails'
import '../ProjectsPage/ProjectsPage.css'
import {useState} from 'react'
import anthemsPreview from '../../assets/anthemsPreview.png'
import chroniclesPreview from '../../assets/chroniclesPreview.png'
import hyperloomPreview from '../../assets/hyperloomPreview.png'

const ProjectsPage = ()=> {
  const [selectedProject, setSelectedProject] = useState(null)

  const ProjectArray = {
    'anthems' : 
    {title : 'Avian Anthems', size: '4', mod : '3rd', 
      tech: ['React', 'TypeScript', 'Cypress', 'OOP'],
      previewImg: anthemsPreview,
      abstract: 'The world of birdsongs is a vast one, and this project aims to offer a glimpse into a robust trove of calls and songs that have been collected by our fellow audience members.'
    },
    'chronicles' : 
    {title : 'Mars Chronicles', size: '4', mod : '3rd', 
      tech : ["React", "Redux", "Cypress", 'Functional'],
      previewImg: chroniclesPreview
    },
    'hyperloom' : 
    {title: 'Hyper Loom', size: '7', mod : '4th', 
      tech: ['React', 'Redux', 'Cypress', 'Functional'],
      previewImg: hyperloomPreview
    }
  }


  const selectProject = (project) => {
    setSelectedProject(project);
  }

  return (
    <>
    <div className='project-browser left-side'>
      <ProjectCard project={ProjectArray['anthems']} select={()=>selectProject('anthems')}/>
      <ProjectCard project={ProjectArray['chronicles']} select={()=>{selectProject('chronicles')}}/>
      <ProjectCard project={ProjectArray['hyperloom']} select={()=>{selectProject('hyperloom')}}/>
    </div>
    <section className='focus-window right-side'>
      {!selectedProject ? <h1>Please choose a project on the left for details!</h1> : 
      <img src={`${ProjectArray[selectedProject]['previewImg']}`} 
      alt={selectedProject} 
      className='preview-image'>
      </img>}
      {selectedProject && <ProjectDetails project={ProjectArray[selectedProject]}/>}
    </section>
    </>
  )
}

export default ProjectsPage;