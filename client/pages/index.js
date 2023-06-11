import { useContext } from 'react'
import { TwitterContext } from '../context/TwitterContext'
import Feed from '../components/home/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import metamaskLogo from '../assets/mylogo2.png'
import errorImg from '../assets/error.png'
import Image from 'next/image'
import background from '../background/bk1.jpg'
// import '../lib/style.css'
// import Instapost from '../components/home/instagrampost'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[url('../background/bgg1.jpg')]  text-black`,
  content: `max-w-[1400px] w-full flex justify-centre`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-[#2d83c545] font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#80808038]`,
  loginContent: `text-3xl text-black font-bold text-center mt-24  `,
  content1: `bg-[url('../background/bk1.jpg')] `,
}

export default function Home() {
  const { appStatus, connectWallet } = useContext(TwitterContext)

  const app = (status = appStatus) => {
    switch (status) {
      case 'connected':
        return userLoggedIn

      case 'notConnected':
        return noUserFound

      case 'noMetaMask':
        return noMetaMaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }

  const userLoggedIn = (

    <div className={style.content}  >

      <Sidebar />
      <Feed />
      {/* <Instapost /> */}
      <Widgets />

    </div>


  )

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={400} height={400} alt='metamasklogo' />
      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  )


  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} alt='metamasklogo' />
      <div className={style.loginContent}>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} width={250} height={200} alt='errorimage' />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )


  return <div className={style.wrapper}>{app(appStatus)}</div>
}



