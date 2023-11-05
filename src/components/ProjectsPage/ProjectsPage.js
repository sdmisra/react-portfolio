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
      tech: ['react', 'javascript', 'typescript', 'mocha', 'chai', 'git', 'html5', 'css3'],
      previewImg: anthemsPreview,
      abstract: 'The world of birdsongs is a vast one, and this project aims to offer a glimpse into a robust trove of calls and songs that have been collected by our fellow audience members.'
    },
    'chronicles' : 
    {title : 'Mars Chronicles', size: '4', mod : '3rd', 
      tech : ['react', 'redux', 'javascript', 'html5', 'css3', 'mocha', 'chai', 'git'],
      previewImg: chroniclesPreview,
      abstract: 'One of mankinds most incredible accomplishments to date is certainly our ventures into the exploration of space. This application enables users to browse Mars Rover images, as offered directly from NASA and updated on a nearly daily basis. '
    },
    'hyperloom' : 
    {title: 'Hyper Loom', size: '7', mod : '4th', 
      tech: ['react', 'redux', 'javascript', 'html5', 'css3', 'mocha', 'chai', 'git'],
      abstract: 'This project is a unique offering indeed, as it enables users to explore vibrant imagined worlds that have been generated with ChatGPT, MidJourney, and our teams intention to offer fuel to the creative fires of those who interact with it.',
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