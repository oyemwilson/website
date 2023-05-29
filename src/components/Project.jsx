
const Project = ({
  title,
  description,
  url,
  image,
  imageAlt
}) => {
  return (
    <div className='project-card d-flex align-items-top justify-content-center px-5 py-5 my-5'>
      <div className='project-description  align-items-center mr-5 pt-lg-0 pt-4'>
        <h3 className='pb-3'> { title } </h3>
        <p className='pb-4'> { description } </p>
        <a
          href= { url }
          id='visit-project-url'>
          Visit { title }
        </a>
      </div>
      <a href={ url }>
      <img
        src={ image }
        className='img-fluid'
        alt={ imageAlt }/>
      </a>
    </div>
  )
}

export default Project;