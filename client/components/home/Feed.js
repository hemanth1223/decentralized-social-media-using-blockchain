import { BsStars } from 'react-icons/bs'
import TweetBox from '../home/TweetBox'
import Post from '../Post'
import {useContext ,useEffect} from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
    wrapper: ` flex-[2] border-r border-l border-[#38444d] overflow-y-scroll bg-[url('/client/background/bgg1.jpg')`,
    header: ` top-0 bg-[url('/client/background/bgg1.jpg') z-10 p-4 flex justify-between items-center text-black ]`,
    headerTitle: `text-xl font-bold`,
  }




function Feed() {
  const {tweets} = useContext(TwitterContext)
    return(

        <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4,
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4,
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
    
}


export default Feed
