
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
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

const About=()=> {
  const router = useRouter()
  return (
    <div className="bg-gray-100  bg-[url('../background/bgg1.jpg')]">
         <div className={style.header}>
    <div onClick={() => router.push('/')} className={style.backButton}>
      <BsArrowLeftShort />
    </div>
    <div className={style.details}>
      <div className={style.primary}>About   </div>
    
    </div>
  </div>
      <div className="container px-5 py-24 mx-auto ">
        <div className="text-center mb-20  ">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 ">
            Meet Our Team
          </h1>
          <p className="text-base leading-relaxed xl:w-30 lg:w-30 mx-auto text-black bg-[#c4c4c4] ">
           A visionary and innovative students who has developed a decentralized social media platform using blockchain technology. We are 3rd year students pursuing Information Science & Engineering at MVJCE. our passion for blockchain technology and social media has led him to create a platform that prioritizes the security and privacy of users' personal information. our platform is based on the Ethereum blockchain and is a decentralized application (Dapp). Through our project, we hopes to revolutionize the way we interact on social media and provide a more secure and private experience for users. Stay tuned for updates on our project and the future of decentralized social media!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 xl:w-1/4 p-6 flex flex-col">
            <img src="./profile/hemanth2.jpg" className="mb-4 rounded-lg shadow-lg" alt="Profile" />
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 pl-4">B L Hemanth</h2>
              <div className="flex mt-2 items-center pl-4">
                <a href='https://github.com/hemanth1223'>
                <FaGithub className="text-black w-6 h-6 mr-2" />
                </a>
                <a href='https://www.instagram.com/hemanth_d.boss/'><FaInstagram className="text-black w-6 h-6 mr-2" /></a>
                <a href='https://in.linkedin.com/in/hemanth1223'><FaLinkedin className="text-black w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6 flex flex-col">
            <img src="./profile/tkv3.jpg" className="mb-4 rounded-lg shadow-lg" alt="Profile" />
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 pl-4">Thrishul K V</h2>
              <div className="flex mt-2 items-center pl-4">
                <a href='https://github.com/Thrishu'>
                <FaGithub className="text-black w-6 h-6 mr-2" />
                </a>
                <a href='https://www.instagram.com/thrishulkv/'><FaInstagram className="text-black w-6 h-6 mr-2" /></a>
                <a href='https://www.linkedin.com/in/thrishul-k-v-53b5261b2/'><FaLinkedin className="text-black w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6 flex flex-col">
            <img src="./profile/karthik4.jpg" className="mb-4 rounded-lg shadow-lg" alt="Profile" />
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 pl-4">Karthik M L</h2>
              <div className="flex mt-2 items-center pl-4">
                <a href='https://github.com/Karthikreddyml'>
                <FaGithub className="text-black w-6 h-6 mr-2" />
                </a>
                <a href='https://instagram.com/karthikreddy_karti?igshid=OTk0YzhjMDVlZA=='><FaInstagram className="text-black w-6 h-6 mr-2" /></a>
                <a href='https://www.linkedin.com/in/karthik-m-l-665815253'><FaLinkedin className="text-black w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6 flex flex-col">
            <img src="./profile/hruthik5.jpg" className="mb-4 rounded-lg shadow-lg" alt="Profile" />
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 pl-4">Hruthik N D</h2>
              <div className="flex mt-2 items-center pl-4">
                <a href='https://github.com/hruthiknd'>
                <FaGithub className="text-black w-6 h-6 mr-2" />
                </a>
                <a href='https://instagram.com/hruthik_nd?igshid=OTk0YzhjMDVlZA=='><FaInstagram className="text-black w-6 h-6 mr-2" /></a>
                <a href='https://www.linkedin.com/in/hruthik-nd-a19246235'><FaLinkedin className="text-black w-6 h-6" /></a>
              </div>
            </div>
          </div>
    </div>
  </div>
  <div className='text-center mb-20 pl-[20px] pr-[20px]'  >
  <img src="./profile/Telusko.jpg" className="h-[500px] w-[600px] pl-[100px]" alt="telisko" />
  <p className="text-base leading-relaxed xl:w-30 lg:w-30 mx-auto text-black bg-[#c4c4c4] ">
  We attended blockchain workshop conducted by Naveen Reddy Telusko provided an in-depth introduction and practical knowledge about blockchain technology. Naveen Reddy Telusko is a well-known educator and content creator in the field of technology, and his workshops are known for their comprehensive and informative content.

During the workshop, participants were likely introduced to the fundamental concepts of blockchain, including distributed ledger technology, decentralization, and consensus mechanisms. The workshop may have covered various blockchain platforms, such as Ethereum, Hyperledger Fabric, or others, highlighting their unique features and use cases.

The workshop would have likely included hands-on exercises and coding examples to help participants understand the practical aspects of blockchain development. This might have involved working with smart contracts, interacting with blockchain networks, and exploring the development tools and frameworks specific to the discussed blockchain platforms.

Participants may have also learned about tokenization, non-fungible tokens (NFTs), and decentralized applications (dApps), gaining insights into the broader applications and possibilities of blockchain technology beyond cryptocurrencies.

Naveen Reddy Telusko, known for his engaging teaching style, would have likely encouraged participant interaction, answered questions, and provided additional resources to further explore blockchain development.

Overall, the workshop conducted by Naveen Reddy Telusko would have offered a comprehensive overview of blockchain technology, practical demonstrations, and opportunities for participants to gain hands-on experience with blockchain development. </p>
  </div>
  <div className='text-center mb-20 pl-[20px] pr-[20px]'  >
  <img src="./profile/Blockmeet .jpg" className="h-[500px] w-[600px] pl-[100px]" alt="telisko" />
  <p className="text-base leading-relaxed xl:w-30 lg:w-30 mx-auto text-black bg-[#c4c4c4] ">

  Blockmeet's blockchain workshop was a comprehensive introduction to the technology, covering topics such as the history of blockchain, its underlying principles, and its potential applications. The workshop was led by experienced blockchain professionals who shared their knowledge and expertise with the attendees.

The workshop began with a brief overview of the history of blockchain, starting with the invention of Bitcoin in 2009. The speakers then discussed the underlying principles of blockchain, such as its use of cryptography and its distributed ledger technology. They also explained how blockchain can be used to create secure and tamper-proof records of transactions.

The speakers then moved on to discuss the potential applications of blockchain. They highlighted its potential to revolutionize a wide range of industries, including finance, healthcare, and supply chain management. They also discussed the challenges that blockchain faces, such as its scalability and energy consumption.

The workshop concluded with a Q&A session, where the attendees had the opportunity to ask the speakers questions about blockchain. The workshop was well-received by the attendees, who found it to be informative and engaging. </p> </div>
</div>

);
}

export default  About