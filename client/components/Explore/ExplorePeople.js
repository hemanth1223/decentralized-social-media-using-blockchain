import React from "react";


const ExplorePeople = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-lg font-bold text-black">Who to follow</h2>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <img
            src='./profile/karthik.jpg'
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
          <div>
            <p className="font-bold text-black">Karthik M L</p>
            <p className="text-gray-500 text-black">@karthik_ml</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="./profile/hemanth2.jpg"
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
          <div>
            <p className="font-bold text-black">B L Hemanth</p>
            <p className="text-gray-500 text-black">@hemanth_d.boss</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="./profile/hrithik.jpg"
            alt="Profile"
            className="rounded-full h-[40px] w-[40px]"
          />
          <div>
            <p className="font-bold text-black">Hruthik N D</p>
            <p className="text-gray-500 text-black">@hrithik_nd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePeople;