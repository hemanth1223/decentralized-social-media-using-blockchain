import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'

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

const Lists = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col w-full">
            <div className={style.header}>
    <div onClick={() => router.push('/')} className={style.backButton}>
      <BsArrowLeftShort />
    </div>
    <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold text-black">Lists</h2>
       
      </div>
      
   </div>
   {/* <button className="flex items-center text-gray-500 hover:text-blue-500">
          <FiSettings className="mr-1" /> Settings
        </button> */}
      <ul className="divide-y divide-gray-300">
        <li className="py-4 px-4">
          <a href="/" className="flex items-center hover:text-blue-500">
            <div className="rounded-full  bg-gray-500 flex items-center justify-center">
            <img
            src="./profile/hemanth2.jpg"
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
            </div>
            <div className="ml-4 text-black">
              <h3 className="font-bold">B L Hemanth</h3>
              <p className="text-gray-500">@hemanth_d.boss</p>
              <p className="text-sm">A huge fan of D.Boss.</p>
            </div>
          </a>
        </li>
        <li className="py-4 px-4">
        <a href="/" className="flex items-center hover:text-blue-500">
            <div className="rounded-full  bg-gray-500 flex items-center justify-center">
            <img
            src="./profile/karthik.jpg"
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
            </div>
            <div className="ml-4 text-black">
              <h3 className="font-bold">Karthik M L</h3>
              <p className="text-gray-500">@karthik_ml</p>
              <p className="text-sm">Milk boy.</p>
            </div>
          </a>
        </li>
        <li className="py-4 px-4">
        <a href="/" className="flex items-center hover:text-blue-500">
            <div className="rounded-full  bg-gray-500 flex items-center justify-center">
            <img
            src="./profile/hrithik.jpg"
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
            </div>
            <div className="ml-4 text-black">
              <h3 className="font-bold">Hruthik N D</h3>
              <p className="text-gray-500">@hruthik_nd</p>
              <p className="text-sm">Son of Farmer.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Lists;
