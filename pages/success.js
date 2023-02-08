import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import men from "../assets/man.png";
import success from "../assets/success.png";
import download from "../assets/download2.png";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function Success() {
  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />
        <div className="w-full pl-5 pr-3 pb-5 md:mb-[35px] md:pr-[150px] md:pr-0 md:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div>
              <div className="flex justify-center mb-[40px]">
                <div className="flex flex-col items-center">
                  <Image src={success} alt="success" className="mb-[30px] inline-block" />
                  <p className="text-[#4D4B57] text-[22px] font-bold">Transfer Success</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Amount</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">Rp100.000</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Balance Left</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">Rp20.000</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Date & Time</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">May 11, 2020 - 12.20</p>
                </div>
              </div>
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[40px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Notes</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">For buying some socks</p>
                </div>
              </div>
              <div className="mb-[20px]">
                <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Transfer To</p>
              </div>
              <div className="flex mb-[40px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Ilham Danu</p>
                  <p className="text-[#7A7886] text-[14px] leading-[30px]">+62 813-8492-9994</p>
                </div>
              </div>
              <div className=" flex justify-end hover:text-white">
                <button className="group border-1 bg-[#cd738926] hover:bg-[#cd7389] py-[16px] px-5 md:px-[48px] text-[16px] leading-[25px] font-bold rounded-[12px] flex mr-[20px]">
                  <Image src={download} alt="downlad" className="mr-[15px]" />
                  <p className="text-[18px] font-bold leading-[24px] text-[#cd7389] group-hover:text-white ">Download PDF</p>
                </button>
                <Link href="/home" className="border-1 bg-[#cd738926] hover:bg-[#cd7389] py-[16px] px-7 md:px-[48px] text-[#cd7389] hover:text-white text-[16px] leading-[25px] font-bold rounded-[12px]">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
