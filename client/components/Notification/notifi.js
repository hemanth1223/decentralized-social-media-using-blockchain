import React from 'react';
import { BellIcon } from '@heroicons/react/outline';
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

const Notification = () => {
  const router = useRouter()
  return (
    <div className="relative">
        <div className={style.header}>
    <div onClick={() => router.push('/')} className={style.backButton}>
      <BsArrowLeftShort />
    </div>
    <div className={style.details}>
      <div className={style.primary}>Notifications   <button className="bg-transparent p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BellIcon className="h-6 w-6 text-black" aria-hidden="true" />
      </button></div>
    
    </div>
  </div>
      {/* <button className="bg-transparent p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BellIcon className="h-6 w-6 text-black" aria-hidden="true" />
      </button> */}
      <div className="absolute top-0 right-0">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-gray-900">Notifications</p>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/79.jpg" alt="profile" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Jane Doe</a>
                  </p>
                  <p className="text-sm text-gray-500">liked your tweet</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    1
                  </span>
                </div>
              </div>
            </li>
            <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/81.jpg" alt="profile" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">John Doe</a>
                  </p>
                  <p className="text-sm text-gray-500">retweeted your tweet</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    2
                  </span>
                </div>
              </div>
            </li>
            <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="./profile/hemanth2.jpg" alt="profile" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">B L Hemanth</a>
                  </p>
                  <p className="text-sm text-gray-500">commented on your tweet</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    3
                  </span>
                </div>
              </div>
              </li>
              <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="./profile/karthik.jpg" alt="profile" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Karthik M L</a>
                  </p>
                  <p className="text-sm text-gray-500">messaged you</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    1
                  </span>
                </div>
              </div>
              </li>
              <li className="px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="./profile/hrithik.jpg" alt="profile" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Hruthik N D</a>
                  </p>
                  <p className="text-sm text-gray-500">liked your tweet</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    4
                  </span>
                </div>
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

export default Notification;
