import React from 'react'
// import ProfileHeader from '../components/profile/ProfileHeader'
import Message from '../components/Message/msg'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[url('../background/bgg1.jpg')] text-white`,
    content: `max-w-[1400px] w-full flex justify-centre`,
    mainContent: `flex-[2] border-r border-l border-black overflow-y-scroll`,
  }

  const message = () => {
 
    return(
        <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar initialSelectedIcon={'Messages'} />
          <div className={style.mainContent}>
           <Message />
          </div>
          <Widgets />
        </div>
      </div>
    )
}




export default message