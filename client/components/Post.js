import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'
import { TwitterContext } from '../context/TwitterContext'
import { useContext, useEffect, useState } from 'react'
// import { useState } from 'react'
const style = {
    wrapper: `flex p-3 border-b border-[black] text-black bg-white` ,
    profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[black] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[black]`,
    footerIcon: `rounded-full text-lg p-2`,
  }

const Post=({
    displayName,userName,text,avatar,timestamp,isProfileImageNft,
}) => {
  const { currentAccount, currentUser } = useContext(TwitterContext)
  const [profileImageLink] = useState(avatar)
    return(
        <div className={style.wrapper}>
        <div>
          <img
            src={profileImageLink}
            alt={userName}
            
            className={
              isProfileImageNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
          />
        </div>
        <div className={style.postMain}>
<div className='h-[570px] w-[550px]  pl-[70px]'>
<span className={style.headerDetails}>
<span className={style.name}>{displayName}</span>
{isProfileImageNft && (
<span className={style.verified}>
  <BsFillPatchCheckFill />
 </span>
)}
<span className={style.handleAndTimeAgo}>
  @{userName}.{format(new Date(timestamp).getTime())}
</span>
</span>
<div className={style.tweet}>{text}</div>

       <div className="max-w-md bg-[#6576833d] rounded-lg shadow-2xl shadow-black overflow-hidden h-[500px] w-[500px] pl-[50px] pr-[50px] pt-[30px] ">
      <div className="relative  border-black-500px">
        <img src={profileImageLink} alt='nft' className="w-full h-auto border-solid border-2 border-black-500px" />
        
      </div>
      <div className="p-3">
        <div className="flex items-center mt-2"> <span><h2 className="text-xl font-semibold">NFT-newly minted. </h2></span> 
       <span><img src='./profile/bluetic2.png' alt="Blue Tick" className="w-7 h-4 mr-1" /></span> 
        </div>
      
       
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">Floor Price:</span>
          <span className="text-gray-900 font-semibold">0.35 ETH</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">Volume:</span>
          <span className="text-gray-900 font-semibold">39 ETH</span>
        </div>
      </div>
    </div>
</div>
<div className={style.footer}>
<div className={`${style.footerIcon} hover:bg-[#F9EEFB] hover:text-[#1d9bf0]`}>
<FaRegComment />
</div>
<div
            className={`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#F9EEFB]`}
          >
            <FaRetweet />
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#f91c80] hover:bg-[#F9EEFB]`}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#F9EEFB]`}
          >
            <FiShare />
          </div>
</div>
</div>
</div>
    )}
export default Post 