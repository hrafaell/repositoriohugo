import React from 'react'
import Scroll from '../Buttons/scrollDown/Scroll'

const BackgroundHome = () => {
  return (
    <>
    <div className="bg-hero-section bg-no-repeat h-full w-full absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 object-cover h-full w-full"
      >
      <source src="homepage/robovice-banner.mp4" type="video/mp4" />
    </video>
  </div>
  <Scroll />
        </>
  
  )
}

export default BackgroundHome