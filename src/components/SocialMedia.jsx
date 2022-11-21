import React from 'react'

import { BsTwitter, BsGithub, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href='https://twitter.com/GodsentEhiz' target="blank">
            <BsTwitter/></a>
        </div>
        <div><a href='https://www.linkedin.com/in/godsentehiz/' target="blank">
            <FaLinkedin/></a>
        </div>
        <div><a href='https://github.com/Eh1z' target="blank">
            <BsGithub/></a>
        </div>
        <div><a href='wa.link/nqfgt2' target="blank">
            <BsWhatsapp/></a>
        </div>
    </div>
  )
}

export default SocialMedia