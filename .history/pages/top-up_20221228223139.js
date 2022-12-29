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
import { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import http from "../helper/http";

function TopUp() {
  const token = useSelector((state) => state.auth.token);

  const TopupBalance = async (e) => {
    e.preventDefault();
    const values = {
      amount: e.target.balance.value,
    };
    console.log(values.amount);
    await http(token).post("/transaction/topup", values);
  };
  const [topUp, setTopUp] = useState(false);

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
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={arrowUp} alt="arrowUp" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/search-receiver" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                  Transfer
                </Link>
              </button>
              <button className="flex items-center pr-[96px] pt-5 md:pt-[64px]">
                <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                <Image src={plus} alt="plus" className="md:mr-[15px] w-[28px] h-[28px]" />
                <Link href="top-up" className="text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
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
            <button onClick={() => setTopUp(true)} className="group border-1 bg-[#DADADA] hover:bg-[#cd7389] py-[16px] px-[40px]  rounded-[12px]">
              <p className="text-[#88888F] group-hover:text-white text-[18px] leading-[24px] font-bold">Top Up</p>
            </button>
            <form>
              <p className="text-[#3A3D4299] text-[16px]">Enter the amount of money, and click submit</p>

              <ReactModal isOpen={topUp} className="pl-7 md:ml-[450px] md:mt-[80px] outline-none rounded-[20px] w-max">
                <div className="w-full  pl-5 pr-3 pb-5 md:pr-[150px]">
                  <div className="border-1 bg-white p-[30px]  rounded-[25px]">
                    <div className="flex">
                      <div className="mb-[50px] flex-1">
                        <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Topup</p>
                        <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Enter the amount of money, and click submit </p>
                      </div>
                      <div>
                        <button onClick={() => setTopUp(false)} className="text-[20px] text-[#3A3D42]">
                          X
                        </button>
                      </div>
                    </div>
                    <form onSubmit={TopupBalance}>
                      <div className="mb-[77px] flex w-full justify-center">
                        <div className="border-2 rounded-[10px] py-[16px] px-[70px] text-center tracking-widest w-full">
                          <input name="balance" placeholder="" className="focus:outline-none" />
                          <hr className="w-full px-[20px]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-end">
                          <button type="submit" className="group border-1 bg-[#DADADA] hover:bg-[#cd7389] py-[16px] px-[55px]  rounded-[12px]">
                            <p className="text-[#88888F] group-hover:text-white text-[18px] leading-[24px] font-bold">Submit</p>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </ReactModal>
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

export default withAuth(TopUp);
