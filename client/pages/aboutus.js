import React from 'react'
// import ProfileHeader from '../components/profile/ProfileHeader'
import About from '../components/About/about'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[url('../background/bgg1.jpg')] text-white`,
    content: `max-w-[1400px] w-full flex justify-centre`,
    mainContent: `flex-[2] border-r border-l border-black overflow-y-scroll`,
  }

  const aboutus = () => {
 
    return(
        <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar initialSelectedIcon={'About'} />
          <div className={style.mainContent}>
           <About />
          </div>
          <Widgets />
        </div>
      </div>
    )
}




export default aboutus