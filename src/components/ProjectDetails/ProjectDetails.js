import React from 'react'

const ProjectDetails = ({project}) => {
  console.log(project);
  const {tech, abstract} = project
  console.log(abstract)
  return (
      <div className='project-details'>
        <h3 className='project-heading'>Abstract:</h3>
        <p className='project-abstract'>{abstract}</p>
      </div>
  )
}

export default ProjectDetails;