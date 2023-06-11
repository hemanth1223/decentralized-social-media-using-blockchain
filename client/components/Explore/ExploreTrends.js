import React from "react";
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'

const style = {
  wrapper: `border-[#38444d] border-b sticky`,
  header: `py-1 px-3 mt-2 flex items-center bg-[url('../background/bgg1.jpg')]`,
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

const ExploreTrends = () => {
  const router = useRouter()
  return (


    <div className="flex flex-col space-y-4">
    <div className={style.header}>
    <div onClick={() => router.push('/')} className={style.backButton}>
      <BsArrowLeftShort />
    </div>
    <div className={style.details}>
      <div className={style.primary}>Explore..!</div>
    </div>
  </div>

      <div className="flex items-center space-x-2 ">
        <h2 className="text-lg font-bold text-black">Trending</h2>
      </div>
      <div className="flex flex-col space-y-2 ">
        <a href="#" className="text-blue-500 hover:underline">
          #ReactJS
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          #TailwindCSS
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          #JavaScript
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          #WebDevelopment
        </a>
      </div>
    </div>
  );
};

export default ExploreTrends;