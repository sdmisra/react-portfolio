import React from 'react'
import '../ProjectCard/ProjectCard.css'

export const ProjectCard = () => {
  return (
    <section className='project-card'>
      <h3 className='card-text'>Title: Project Name</h3>
      <h3 className='card-text'>Team Size: Project Size</h3>
    </section>
  )
}

export default ProjectCard;