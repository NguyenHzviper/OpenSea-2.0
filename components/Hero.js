import React from 'react'
import {IoMdInformationCircleOutline} from 'react-icons/io'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://openseauserdata.com/files/spacedrip_launch_image_4x3.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur before:-webkit-mask: linear-gradient(rgb(255, 255, 255), transparent)`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center mx-auto lg:h-[36.625rem]`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer transition-all`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4 mr-[22.5rem]`,
  name: ``,
  nickname: `text-[#2081e2] hover:text-[#1868b7]`,
  infoIcon: `flex items-center flex-1 text-[#8a939b] hover:text-white text-3xl font-bold`,
}


const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton} href="https://opensea.io/explore-collections">Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg h-[34.375rem] w-[34.375rem]" 
              src="https://openseauserdata.com/files/spacedrip_launch_image_4x3.jpg"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/j1DQX3rpcWisEQKc_FK8GL4t-eDIA-vBKfY9jmlwWiq9hlt9cEPctg1ZiI7Gq-7I9uJI0iYt5IicUx36DdZKUqGDdYQG3vSjczaB8w=s80"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Distance</div>
                <a
                  className={style.nickname}
                  href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26295466185321165399678017206049401268544401990002960745176610597860968235009"
                >
                  GrayArtist
                </a>
              </div>
              <div className={style.infoIcon}>
                <IoMdInformationCircleOutline/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero