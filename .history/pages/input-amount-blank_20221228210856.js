import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import plus from "../assets/plus.png";
import user from "../assets/user.png";
import grid from "../assets/grid.png";
import logOut from "../assets/log-out.png";
import arrowUp from "../assets/arrow-up.png";
import search from "../assets/search.png";
import men from "../assets/man.png";
import woman from "../assets/woman.png";
import gridBlack from "../assets/grid-black.png";
import arrowBlue from "../assets/arrow-blue.png";
import withAuth from "./middleware/private-route";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import http from "../helper/http";
import { useRouter } from "next/router";
import { useLocation } from "react-router-dom";

function InputAmountBlank() {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const { state } = useLocation();

  const [profile, setProfile] = useState({});
  const [sendTransfer, setSendTransfer] = useState([]);

  useEffect(() => {
    getUserProfile();
    getTransfer();
  }, []);

  const getUserProfile = async () => {
    const { data } = await http(token).get(`https://68xkph-8888.preview.csb.app/profile ${state}`);
    const { results } = data;
    setProfile(results);
  };

  const getTransfer = async () => {
    const { data } = await http(token).get(`/confirmation-pin-blank`);
    const { results } = data;
    setSendTransfer(results);
  };

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
          <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-full">
            <div className="flex-1">
              <button className="flex items-center pr-[96px] pt-5 md:pt-[52px] pl-[38px]">
                <Image src={gridBlack} alt="grid" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7]">
                  Dashboard
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px]">
                <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                <Image src={arrowUp} alt="arrowUp" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/search-receiver" className="text-[#60bad7] text-[18px] leading-[31px]">
                  Transfer
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={plus} alt="plus" className="md:mr-[15px] w-[28px] h-[28px]" />
                <Link href="top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
                  Top Up
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={user} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/profile" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                  Profile
                </Link>
              </button>
            </div>
            <div className="pb-[50px]">
              <button className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
                <Image src={logOut} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/login" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full pb-5 pl-5 pr-3 md:pb-0 md:mb-[35px] md:pr-[150px] md:pr-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Transfer Money</p>
            </div>

            <div className="mb-[40px]">
              <button className="flex mb-[60px] border-1 shadow-md p-[20px] rounded-[10px] w-full">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                </div>
                <div className="">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{profile.firstName}</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">{profile.phoneNumber}</p>
                </div>
              </button>
            </div>
            <div className="text-[#7A7886] text-[16px] w-[336px] mb-[65px]">Type the amount you want to transfer and then press continue to the next steps.</div>
            <div className="">
              <form className="text-center">
                <input name="amount" placeholder="0.00" className="text-[#B5BDCC] text-[42px] font-bold focus:outline-none text-center  mb-[39px]" />
                <p className="text-[#3A3D42] text-[16px] font-bold mb-[63px]">Rp120.000 Available</p>
                <input placeholder="Add some notes" className="text-[#A9A9A9CC] text-[16px] mb-[12px] focus:outline-none" />
                <hr className=" w-full flex justify-center mb-[96px]" />
                <button className="border-1 bg-[#60bad7] hover:bg-[#cd7389] py-[16px] px-[48px] text-white text-[16px] leading-[25px] font-bold rounded-[12px]">Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="pl-5 pr-3 md:pl-[150px] md:pr-[150px] md:py-[20px] bg-[#7a4c75]">
        <div className="text-[#EFEFEFE5] text-[16px] leading-[28px] md:flex">
          <div className="flex-1 mb-2 md:mb-0">2020 CluePay. All right reserved.</div>
          <div className="font-semibold flex flex-col md:block">
            <span className="mr-[40px] mb-1 md:mb-0">+62 5637 8882 9901</span>
            <span>contact@cluepay.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withAuth(InputAmountBlank);
