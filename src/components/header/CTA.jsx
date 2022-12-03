import React from 'react'

import resume from '../../assets/Elizaveta_Firsova_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contacts" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA