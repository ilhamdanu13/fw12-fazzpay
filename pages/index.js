/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import phone from '../assets/phone.png';
import lock from '../assets/lock.png';
import download from '../assets/download.png';
import partners from '../assets/partners.png';
import testi from '../assets/testi.png';
import arrLeft from '../assets/arrow-left.png';
import arrRight from '../assets/arrow-right.png';
import peak from '../assets/peak.png';
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className="font-nunitoSans">
      <div className="bg-[#7a4c75] pb-[200px]">
        <div className="relative px-3 lg:px-[150px] pt-[63px] flex flex-col lg:flex-row mb-5 lg:mb-[177px]">
          <div className="text-[29px] font-bold text-white leading-[39.56px] flex-1">CluePay</div>
          <div className="text-white flex items-center">
            <Link href="/login" className="border-2 py-[11px] px-[24px] lg:px-[45px] rounded-[12px] mr-[30px] hover:text-[#7a4c75] hover:bg-white hover:border-0 hover:py-[13px] hover:px-[47px]">
              Login
            </Link>
            <Link href="/signup" className="border-2 py-[11px] px-[24px] lg:px-[36px] rounded-[12px]  hover:text-[#7a4c75] hover:bg-white hover:border-0 hover:py-[13px] hover:px-[38px]">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col text-center justify-center mb-[40px]">
          <p className="text-[68px] leading-[102px] font-[800] text-white">Awesome App</p>
          <p className="text-[68px] leading-[102px] font-[800] text-white">For Saving Time.</p>
        </div>
        <div className="relative flex flex-col text-center justify-center mb-[50px]">
          <p className="text-[18px] leading-[31px] text-white">We bring you a mobile app for banking problems</p>
          <p className="text-[18px] leading-[31px] text-white">that oftenly wasting much of your times.</p>
        </div>
        <div className="relative text-white flex justify-center">
          <Link href="home" className="border-2 py-[11px] px-[36px] rounded-[12px]  hover:text-[#7a4c75] hover:bg-white hover:border-1">
            Try it free
          </Link>
        </div>
      </div>
      <div className="bg-[#F5F1F3] pb-[50px] lg:pb-[120px]">
        <div className="pt-3 lg:pt-[120px] flex justify-center lg:mb-[30px] leading-[93px]">
          <h1 className="text-[#60bad7] text-[30px] lg:text-[60px] font-[800px] mr-3">Why</h1>
          <h1 className="text-[30px] lg:text-[60px] font-[800px] text-[#3A3D42]">Choose CluePay</h1>
        </div>
        <div className="flex justify-center mb-7 lg:mb-[70px]">
          <p className="text-[#3A3D42] text-[18px] leading-[31px] w-[550px] text-center">We have some great features from the application and it’s totally free to use by all users around the world.</p>
        </div>
        <div className="px-3 lg:flex lg:px-[180px] justify-center items-center">
          <div className="lg:mr-7 mb-3 lg:mb-0">
            <div className="border-1 text-center rounded-[25px] bg-[#cd7389] px-[30px] pt-[40px] pb-[50px]">
              <Image src={phone} alt="phone" className="inline-block" />
              <div className="flex flex-col">
                <p className="text-white text-[24px] font-bold leading-[31px] pt-[35px]">24/7 Support</p>
                <p className="text-white text-[18px] leading-[31px] pt-[35px] lg:w-[300px]">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
            </div>
          </div>
          <div className="mb-3 lg:mb-0 lg:mr-7">
            <div className="border-1 text-center rounded-[25px] bg-[#fad8a9] px-[30px] pt-[40px] pb-[50px]">
              <Image src={lock} alt="lock" className="inline-block" />
              <div>
                <p className="text-white text-[24px] font-bold leading-[31px] pt-[35px]">Data Privacy</p>
                <p className="text-white text-[18px] leading-[31px] pt-[35px] lg:w-[300px]">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-1 text-center rounded-[25px] bg-[#60bad7] px-[30px] pt-[40px] pb-[50px] ">
              <Image src={download} alt="download" className="inline-block" />
              <div>
                <p className="text-white text-[24px] font-bold leading-[31px] pt-[35px]">Easy Download</p>
                <p className="text-white text-[18px] leading-[31px] pt-[35px] lg:w-[300px]">CluePay is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#473AD10F]">
        <div className="px-3 py-3 lg:px-[140px] lg:py-[90px] flex justify-center items-center">
          <Image src={partners} alt="partners" className="" />
        </div>
      </div>
      <div className="bg-[#F5F1F3] pb-5 lg:pb-[120px]">
        <div className="pt-14 lg:pt-[120px] flex justify-center mb-[50px]">
          <span className="border-1 bg-[#473AD10F] text-[#60bad7] text-[40px] text-[32px] lg:text-[68px] leading-[120px] px-3 lg:px-[50px] lg:px-[96px] py-[34px] rounded-[85px]">Rp. 390.736.500</span>
        </div>
        <div className="lg:flex justify-center font-[800] mb-5 lg:mb-[30px]">
          <p className="text-center text-[#60bad7] text-[30px] lg:text-[60px] leading-[93px] mr-5">Money </p>
          <p className="text-[30px] lg:text-[60px] text-center text-[#3A3D42] leading-[93px]">has Been Transfered.</p>
        </div>
        <div className="flex justify-center text-center">
          <p className="text-[#3A3D42] text-[18px] leading-[31px] w-[550px]">That amount of money has been transfered from all users. We still counting and going strong!</p>
        </div>
      </div>
      <div className="bg-[#473AD10F] flex flex-col lg:flex-row px-3 lg:px-[120px]">
        <div className="mr-[20px]">
          <Image src={peak} alt="peak" className="pt-5 lg:pt-[120px]" />
        </div>
        <div className="pb-[50px]">
          <div className="text-[50px] font-[800] leading-[93px] pt-[90px] mb-[40px]">
            <div className="flex flex-col lg:flex-row">
              <p className="text-[#3A3D42] mr-3">All The</p>
              <p className="text-[#60bad7]">Great</p>
            </div>
            <p className="text-[#3A3D42]">CluePay Features.</p>
          </div>
          <div>
            <div className="border-1 bg-white py-[15px] pl-[25px] pr-[35px] rounded-[25px] mb-[30px]">
              <div className="flex mb-[15px] pt-[25px]">
                <p className="text-[#60bad7] text-[22px] mr-[15px]">1.</p>
                <p className="text-[#3A3D42] font-bold text-[20px]">Small Fee</p>
              </div>
              <div className="pb-[25px]">
                <p className="text-[#3A3D42] text-[18px]">We only charge 5% of every success transaction done in CluePay app.</p>
              </div>
            </div>
            <div className="border-1 bg-white py-[15px] pl-[25px] pr-[35px] rounded-[25px] mb-[30px]">
              <div className="flex mb-[15px] pt-[25px]">
                <p className="text-[#60bad7] text-[22px] mr-[15px]">2.</p>
                <p className="text-[#3A3D42] font-bold text-[20px]">Data Secured</p>
              </div>
              <div className="pb-[25px]">
                <p className="text-[#3A3D42] text-[18px]">All your data is secured properly in our system and it’s encrypted.</p>
              </div>
            </div>
            <div className="border-1 bg-white py-[15px] pl-[25px] pr-[35px] rounded-[25px] ">
              <div className="flex mb-[15px] pt-[25px]">
                <p className="text-[#60bad7] text-[22px] mr-[15px]">3.</p>
                <p className="text-[#3A3D42] font-bold text-[20px]">User Friendly</p>
              </div>
              <div className="pb-[25px]">
                <p className="text-[#3A3D42] text-[18px]">CluePay come up with modern and sleek design and not complicated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f1f3] pb-5 lg:pb-[120px]">
        <div className="flex flex-col lg:flex-row justify-center pt-5 lg:pt-[120px] mb-5 lg:mb-[30px] px-3 lg:px-0">
          <p className="text-[#3A3D42] text-[60px] font-[800] leading-[93px] mr-4">What Users are</p>
          <p className="text-[#60bad7] text-[60px] font-[800] leading-[93px]">Saying.</p>
        </div>
        <div className="flex justify-center text-center mb-[60px]">
          <p className="text-[#3A3D42] text-[18px] leading-[31px] w-[550px]">We have some great features from the application and it’s totally free to use by all users around the world.</p>
        </div>
        <div className="flex items-center px-3 lg:px-[120px]">
          <div className="mr-3 lg:mr-[46px]">
            <button type="submit" className="border-1 bg-white rounded-[20px] w-[30px] h-[30px]">
              <Image src={arrLeft} alt="arrLeft" />
            </button>
          </div>
          <div className="mr-3 lg:mr-[46px]">
            <div className="border-1 bg-white p-[60px] text-center rounded-[30px]">
              <Image src={testi} alt="testi" className="inline-block mb-[30px]" />
              <p className="text-[26px] font-bold leading-[40px] mb-[10px] text-[#373C46]">Alex Hansinburg</p>
              <p className="text-[#56585B] text-[20px] leading-[33px] mb-[45px]">Designer</p>
              <p className="text-[#676A71] text-[18px] leading-[33px]">
                “This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just
                try this app and see the power!”
              </p>
            </div>
          </div>
          <div className="">
            <button type="submit" className="border-1 bg-white rounded-[20px] w-[30px] h-[30px]">
              <Image src={arrRight} alt="arrRight" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
