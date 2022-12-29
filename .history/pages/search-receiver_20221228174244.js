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

function SearchReceiver() {
  const token = useSelector((state) => state.auth.token);
  const [listTransaction, setListTransaction] = useState({});
  console.log(listTransaction);
  useEffect(() => {
    getListTransaction().then((data) => {
      setListTransaction(data);
    });
  }, []);

  const getListTransaction = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/transactions/recipient?page=1&limit=5");
    return data;
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
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Search Receiver</p>
              <div className="flex border-1 relative">
                <Image src={search} alt="search" className="mr-[22px] absolute pt-[15px] left-3" />
                <input placeholder="Search receiver here" className="focus:outline-none w-full text-[#3A3D4266] text-[16px] border-1 bg-[#3A3D421A] py-[15px] pl-[54px]  rounded-[12px]" />
              </div>
            </div>
            <button className="w-full">
              {listTransaction?.results?.map((bio) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex mb-[60px] border-1 shadow-md p-[20px] rounded-[10px] ">
                  <div className="mr-[15px]">
                    <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{bio.firstName + "  " + bio.lastName}</p>
                    <p className="text-[#7A7886] text-[14px] leading-[19px]">{bio.phoneNumber}</p>
                  </div>
                </div>
              ))}
            </button>
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

export default withAuth(SearchReceiver);

{
  /* <div className="flex mb-[60px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  <Image src={woman} alt="woman" className="w-[70px] h-[70px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Amira Humara</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">+62 813-8492-9994</p>
                </div>
              </div> */
}
