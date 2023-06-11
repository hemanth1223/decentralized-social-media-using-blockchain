import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { TwitterContext } from '../context/TwitterContext'
import SidebarOption from './SidebarOption'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { FaAddressCard,FaRegAddressCard } from 'react-icons/fa'
import Modal from 'react-modal'
import { customStyles } from '../lib/constants'
import ProfileImageMinter from './mintingModel/ProfileImageMinter'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

import Image from 'next/image'

import logo from '../assets/mylogo2.png'

const style = {
    wrapper: ` sticky flex-[0.7] px-0 flex flex-col justify-left`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#989898] hover:bg-[#666666]  flex items-center justify-center font-bold rounded-3xl h-[50px] w-[150px] mt-[20px] cursor-pointer text-black`,
    navContainer: `flex-1 text-black justify-left sticky`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#d8d8d8] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg text-black`,
    handle: `text-black`,
    moreContainer: `flex items-center mr-2 text-black`,
    loginContainer: `w-full h-full flex  justify-left items-center  text-3xl m-4 pr-20`,
  }
  function Sidebar({ initialSelectedIcon = 'Home' }) {
    const [selected, setSelected] = useState(initialSelectedIcon)
    const { currentAccount, currentUser } = useContext(TwitterContext)
    const router = useRouter()
    return(
    <div className={style.wrapper}>
      <div className={style.loginContainer}>
      <Image src={logo} width={100} height={100} />
      </div>
      <div className={style.navContainer}>

        <SidebarOption Icon={selected === 'Home' ? RiHome7Fill :RiHome7Line }
          text='Home'
          isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}/>

        <SidebarOption Icon={selected === 'Explore' ? FaHashtag : BiHash}
         text='Explore'
         isActive={Boolean(selected === 'Explore')}
         setSelected={setSelected}
         redirect={'/explore'}/>
         
        

         <SidebarOption
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          text='Notifications'
          isActive={Boolean(selected === 'Notifications')}
          setSelected={setSelected}
          redirect={'/notification'}
        />

        <SidebarOption
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text='Messages'
          isActive={Boolean(selected === 'Messages')}
          setSelected={setSelected}
          redirect={'/messages'}
        />

        <SidebarOption
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text='Bookmarks'
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={setSelected}
          redirect={'/bookmarks'}
        />

        <SidebarOption
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text='Lists'
          isActive={Boolean(selected === 'Lists')}
          setSelected={setSelected}
          redirect={'/lists'}
        />
       
        <SidebarOption
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text='Profile'
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/Profile'}
        />
        
       
        <SidebarOption Icon={selected === 'About ' ? FaAddressCard : FaRegAddressCard  } text='About ' 
        isActive={Boolean(selected === 'About ')}
        setSelected={setSelected}
        redirect={'/aboutus'}
        
        />
        <div
          onClick={() =>
            router.push(`${router.pathname}/?mint=${currentAccount}`)
          }
          className={style.tweetButton}
        >
          Mint
        </div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          <img
            src={currentUser.profileImage}
            alt='profile'
            className={
              currentUser.isProfileImageNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
          />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>{currentUser.name}</div>
            <div className={style.handle}>
              @{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            </div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
    )
  
}


export default Sidebar