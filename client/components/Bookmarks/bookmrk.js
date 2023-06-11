import React from 'react';
import { BookmarkIcon } from '@heroicons/react/outline';
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

const style = {
  wrapper: `border-[#38444d] border-b sticky`,
  header: `py-1 px-3 mt-2 flex items-center ]`,
  primary: `bg-transparent outline-none font-bold text-black text-xl`,
  secondary: `text-[black] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#d8d8d8] p-1 text-black `,
  coverPhotoContainer: `flex items-center justify-center h-[20vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between `,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-4`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-black`,
}


const Bookmarks = () => {
    const router = useRouter()
  return (
  
          <div className="relative">
        <div className={style.header}>
    <div onClick={() => router.push('/')} className={style.backButton}>
      <BsArrowLeftShort />
    </div>
    <div className={style.details}>
      <div className={style.primary}>Bookmarks   <button className="bg-transparent p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BookmarkIcon className="h-6 w-6 text-bkack" aria-hidden="true" />
      </button> </div>
    
    </div>
  </div>

      
      <div className="absolute ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-gray-900">Bookmarks</p>
          </div>
          <ul className="divide-y divide-gray-200">
          <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="https://pbs.twimg.com/profile_images/1554431975980941312/W0ZIegn8_400x400.jpg" alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Karnataka Tourism
@KarnatakaWorld
·
May 13</a>
                  </div>
                  <p className="text-sm text-gray-500">Caught a glimpse of the majestic Hornbills in #Dandeli! Two of them sitting gracefully on a tree, their vibrant beaks and feathers a sight to behold. Nature never ceases to amaze me! </p>
                </div>
              
              </div>
              <div className="pl-20">
                  <img className="h-100 w-100 " src="https://pbs.twimg.com/media/Fv-YR4uagAAScLZ?format=jpg&name=small" alt="" />
                </div>
            </li>
            <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="https://pbs.twimg.com/semantic_core_img/1560283104211660800/fFDHlbPb?format=jpg&name=900x900" alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Manchester United vs Wolverhampton Wanderers</a>
                  </div>
                  <p className="text-sm text-gray-500">https://twitter.com/i/user/872185597</p>
                </div>
              
              </div>
              <div className="">
                  <img className="h-100 w-100 " src="https://pbs.twimg.com/semantic_core_img/1560283104211660800/fFDHlbPb?format=jpg&name=900x900" alt="" />
                </div>
            </li>
            <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="https://pbs.twimg.com/media/FwEX8aiacAAwOcU?format=jpg&name=small" alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Predict Virat Kohli’s score for the match vs RR today, Correct one will get a VIP Hospitality Ticket for Delhi-Punjab Game ( Dharmshala - 7 May ). </a>
                  </div>
                  <p className="text-sm text-gray-500">https://twitter.com/i/user/872185597</p>
                </div>
              
              </div>
              <div className="">
                  <img className="h-100 w-100 " src="https://pbs.twimg.com/media/FwEX8aiacAAwOcU?format=jpg&name=small" alt="" />
               
                </div>
            </li>
          </ul>
          <div className="px-4 py-2">
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View all</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
