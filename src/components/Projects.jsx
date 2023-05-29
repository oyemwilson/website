import React from 'react'
import Project from './Project'
import './Projects.css'

import TiideHRImage from '../images//tiide-demo-shot.png'
import LaundrixImage from '../images/laundrix-demo-shot.png'
import UserSearchImage from '../images/user-search-demo-shot.png'

const Projects = () => {
  return (
  <div id='projects' className='pt-5'>
    <h2 id='section-title' className='mt-4'>Select Projects</h2>

    <Project
      title='TiideHR'
      description={`A human resources app built to streamline all the hr processes in small to
      meduim sized companies, from managing task, roles, leave, level and payroll.`}
      url={'https://tiide-hr.netlify.app'}
      image={TiideHRImage}
      imageAlt={'screenshot of tidehr platform'}
    />

    <Project
      title='Laundrix Website'
      description={'A laundry website that shows services rendered and pricing'}
      url={'https://laundrix.netlify.app'}
      image={LaundrixImage}
      imageAlt={'screenshot of laundrix web app'}
    />

    <Project
      title='User Search'
      description={'A  mini project built during my time at tiidelabs'}
      url={'https://tiide-mini.netlify.app'}
      image={UserSearchImage}
      imageAlt={'screenshot of user search project'}
    />
  </div>)
}

export default Projects