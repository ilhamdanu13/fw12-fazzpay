import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import plus from "../assets/plus.png";
import user from "../assets/user.png";
import grid from "../assets/grid.png";
import logOut from "../assets/log-out.png";
import arrowUp from "../assets/arrow-up.png";
import arrowUp2 from "../assets/arrow-up2.png";
import plus2 from "../assets/plus2.png";
import arrowUpGreen from "../assets/arrow-green.png";
import arrowRed from "../assets/arrow-red.png";
import men from "../assets/man.png";
import woman from "../assets/woman.png";
import netflix from "../assets/netflix.png";
import adobe from "../assets/adobe.png";

function History() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#f5f1f3] pt-3 md:pt-[40px] md:flex font-nunitoSans">
        <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
          <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-full">
            <div className="flex-1">
              <div className="flex items-center pr-[96px] pt-5 md:pt-[52px]">
                <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                <Image src={grid} alt="grid" className="mr-[23px] w-[28px] h-[28px]" />
                <Link href="/home" className="text-[#60bad7]">
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

        <div className="w-full pb-5 md:pb-0 md:mb-[35px] pl-5 md:pl-0 pr-3 md:pr-[150px]">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="flex mb-[40px]">
              <p className="flex-1 text-[#3A3D42] text-[18px] leading-[25px] font-bold">Transaction History</p>
              <select className="border-1 bg-[#3A3D421A] py-[8px] px-[28px] rounded-[12px]">
                <option href="#" className="text-[#60bad7] text-[14px] font-semibold leading-[20px] flex items-center">
                  -- Select Filter --
                </option>
              </select>
            </div>
            <div>
              <div className="flex mb-[40px]">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[56px] h-[56px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Ilham Danu</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">Accept</p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#1EC15F] font-bold text-[16px] leading-[21px]">+Rp50.000</span>
                </div>
              </div>
              <div className="flex mb-[40px]">
                <div className="mr-[15px]">
                  <Image src={netflix} alt="netflix" className="" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Netflix</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">Transfer</p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#FF5B37] font-bold text-[16px] leading-[21px]">-Rp149.000</span>
                </div>
              </div>
              <div className="flex mb-[40px]">
                <div className="mr-[15px]">
                  <Image src={woman} alt="woman" className="w-[56px] h-[56px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Amira Humara</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">Accept</p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#1EC15F] font-bold text-[16px] leading-[21px]">+Rp50.000</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-[15px]">
                  <Image src={adobe} alt="adobe" className="" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Ilham Danu</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px]">Topup</p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#FF5B37] font-bold text-[16px] leading-[21px]">+Rp249.000</span>
                </div>
              </div>
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

export default History;
