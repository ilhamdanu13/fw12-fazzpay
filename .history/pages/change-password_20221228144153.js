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
import lockInput from "../assets/lock-input.png";
import eye from "../assets/eye.png";

import http from "../helper/http";
import { useState } from "react";
import withAuth from "./middleware/private-route";
import { useSelector } from "react-redux";

function ChangePassword() {
  const token = useSelector((state) => state.auth.token);
  const [errMessage, setErrMessage] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();
    const currentPassword = e.target.password.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      return setErrMessage("New password and confirm password does not matched");
    }

    try {
      const { data } = await http(token).post("profile/change-password", {
        currentPassword,
        newPassword,
        confirmPassword,
      });
      console.log(data);
    } catch (err) {
      return setErrMessage(err.message);
    }
  };

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="md:mr-[20px] flex flex-col md:mb-[35px]">
          <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
            <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-[662px]">
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
                <button className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
                  <Image src={logOut} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/login" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pl-5 pr-3 pb-5 md:mb-[35px] md:pr-[150px] md:pl-0 md:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px] pb-[63px]">
            <div className="mb-[104px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Change Password</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">You must enter your current password and then type your new password twice.</p>
            </div>
            <form onSubmit={resetPassword} className="md:px-[140px]">
              {errMessage ? (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errMessage}</span>
                  </div>
                </div>
              ) : null}
              <div className="mb-[63px]">
                <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                  <input name="password" type="password" placeholder="Current password" className="focus:outline-none w-full " />
                  <Image src={eye} alt="eye" className="mr-[20px]" />
                </label>
                <hr />
              </div>
              <div className="mb-[63px]">
                <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                  <input name="newPassword" type="Password" placeholder="New password" className="focus:outline-none w-full " />
                  <Image src={eye} alt="eye" className="mr-[20px]" />
                </label>
                <hr />
              </div>
              <div className="mb-[70px]">
                <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                  <input name="confirmPassword" type="Password" placeholder="Repeat new password" className="focus:outline-none w-full " />
                  <Image src={eye} alt="eye" className="mr-[20px]" />
                </label>
                <hr />
              </div>
              <div>
                <button type="submit" className="border-1 bg-[#DADADA] py-[16px] px-[110px] md:px-[130px] rounded-[12px] text-[#88888F] text-[18px] leading-[24px] font-bold">
                  Change Password
                </button>
              </div>
            </form>
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

export default withAuth(ChangePassword);
