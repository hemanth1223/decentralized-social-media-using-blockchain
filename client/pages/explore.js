import React from "react";
import Sidebar from "../components/Sidebar";
import ExploreTrends from "../components/Explore/ExploreTrends";
import ExplorePeople from "../components/Explore/ExplorePeople";
import Widgets from "../components/Explore/Widgets";

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[url('../background/bgg1.jpg')] text-white`,
    content: `max-w-[1400px] w-full flex justify-centre `,
    mainContent: `flex-[2] border-r border-l border-black overflow-y-scroll bg-white `,
  }

const Explore = () => {
  return (
    <div className={style.wrapper}>
      <div  
className={style.content}>
        <Sidebar initialSelectedIcon={"Explore"} />
        <div className={style.mainContent}>
          <ExploreTrends />
          <ExplorePeople />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default Explore;