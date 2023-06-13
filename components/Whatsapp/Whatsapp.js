import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

function Whatsapp() {
  return (
    <div className='fixed  right-10 bottom-10 text-green-600 z-10  hidden md:block   '>
        <a href='https://wa.me/5511940118039'>
        <IoLogoWhatsapp size={45} />
        </a>
     
    </div>
  )
}

export default Whatsapp