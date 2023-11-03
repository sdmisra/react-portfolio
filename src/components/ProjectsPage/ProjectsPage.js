import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import '../ProjectsPage/ProjectsPage.css'
import {useState} from 'react'
import anthemsPreview from '../../assets/anthemsPreview.png'
import chroniclesPreview from '../../assets/chroniclesPreview.png'
import hyperloomPreview from '../../assets/hyperloomPreview.png'

const ProjectsPage = ()=> {
  const [selectedProject, setSelectedProject] = useState('')

  const ProjectArray = {
    'anthems' : 
    {title : 'Avian Anthems', size: '4', mod : '3rd', 
      tech: ['React', 'TypeScript', 'Cypress', 'OOP'],
      previewImg: anthemsPreview
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
    <div className='focus-window right-side'>
      {selectedProject === '' ? 
      <h1>Please choose a project on the left for details</h1> 
      : 
      <img src={`${ProjectArray[selectedProject]['previewImg']}`} alt={selectedProject} className='preview-image'></img>}
    </div>
    </>
  )
}

export default ProjectsPage;