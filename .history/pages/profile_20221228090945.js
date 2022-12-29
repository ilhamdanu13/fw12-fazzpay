import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import plus from "../assets/plus.png";
import userBlue from "../assets/user-blue.png";
import logOut from "../assets/log-out.png";
import men from "../assets/man.png";
import gridBlack from "../assets/grid-black.png";
import arrowUp from "../assets/arrow-up.png";
import edit2 from "../assets/edit.png";
import arrowRight from "../assets/arrow-right2.png";
import user from "../assets/user.png";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helper/http";

function Profile() {
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = useState({});
  console.log(bio);
  useEffect(() => {
    getBio().then((data) => {
      setBio(data);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile");
    return data;
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handlerLogout = () => {
    dispatch(logoutAction());
    router.push("/login");
  };

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
          <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-full">
            <div className="flex-1">
              <div className="flex items-center pr-[96px] pt-5 md:pt-[52px] pl-[38px]">
                <Image src={gridBlack} alt="grid" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7]">
                  Dashboard
                </Link>
              </div>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={arrowUp} alt="arrowUp" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/search-receiver" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                  Transfer
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={plus} alt="plus" className=" md:mr-[15px] w-[28px] h-[28px]" />
                <Link href="top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
                  Top Up
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] ">
                <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                <Image src={userBlue} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/profile" className="text-[#60bad7] text-[18px] leading-[31px]">
                  Profile
                </Link>
              </button>
            </div>
            <div className="pb-[50px]">
              <button onClick={handlerLogout} className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
                <Image src={logOut} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                <p className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">Logout</p>
              </button>
            </div>
          </div>
        </div>
        <div className="pl-5 pr-3 md:pl-0 md:pr-[150px] w-full pb-5 md:pb-[33px]">
          <div className="border-1 bg-white pt-[48px] pb-[75px] px-5 md:px-[150px] rounded-[25px]">
            <div className="text-center mb-[50px]" key={char.id}>
              <div className="flex justify-center">
                <Image src={men} alt="men" className="w-[80px] h-[80px] mb-[10px]" />
              </div>
              <div className="flex items-center mb-[15px] justify-center">
                <Image src={edit2} alt="edit" className="w-[9px[ h-[9px] mr-[10px]" />
                <span className="text-[#7A7886] text-[16px] leading-[27px] ">Edit</span>
              </div>
              <div>
                <p className="text-[24px] text-[#4D4B57] leading-[32px] mb-[10px]">{biofirstName}</p>
                <p className="text-[#7A7886] text-[16px] leading-[27px]">+62 813-9387-7946</p>
              </div>
            </div>
            <div>
              <Link href="/personal-info" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Personal Information</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/change-password" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Change Password</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/change-pin" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Change PIN</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/login" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Logout</p>
                </div>
              </Link>
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

export default Profile;
