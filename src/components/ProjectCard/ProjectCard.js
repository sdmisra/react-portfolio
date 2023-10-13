import React from 'react'
import '../ProjectCard/ProjectCard.css'

export const ProjectCard = (props) => {
  const { title, size, mod, tech } = props.project
  return (
    <section className='project-card'>
      <div className='card-left'>
      <h2 className='card-text'>{title}</h2>
      <h3 className='card-text'>Team Size: {size}</h3>
      <h4 className='card-text'>Turing Module: {mod}</h4>
      </div>
      <div className='card-right'>
      <span>{tech.map((item)=> <p className='tech-text'>{item}</p>)}</span>
      </div>
    </section>
  )
}

export default ProjectCard;