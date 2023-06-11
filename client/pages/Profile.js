import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTweets from '../components/Profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[url('../background/bgg1.jpg')] text-white`,
    content: `max-w-[1400px] w-full flex justify-centre`,
    mainContent: `flex-[2] border-r border-l border-black overflow-y-scroll`,
  }

const profile = () => {
    return(
        <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar initialSelectedIcon={'Profile'} />
          <div className={style.mainContent}>
            <ProfileHeader />
            <ProfileTweets />
          </div>
          <Widgets />
        </div>
      </div>
    )
}




export default profile