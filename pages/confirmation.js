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
import ReactModal from "react-modal";
import { useState } from "react";

function Confirmation() {
  const [confirmationPin, setConfirmationPin] = useState(false);
  const [topUp, setTopUp] = useState(false);
  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
          <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-[885px]">
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
              <button onClick={() => setTopUp(true)} className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                <Image src={plus} alt="plus" className="md:mr-[15px] w-[28px] h-[28px]" />
                <p className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">Top Up</p>
              </button>
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
                    <div className="mb-[77px] flex w-full justify-center">
                      <div className="border-2 rounded-[10px] py-[16px] px-[70px] text-center tracking-widest w-full">
                        <span className="text-[#3A3D42] text-[18px]">100000</span>
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
                  </div>
                </div>
              </ReactModal>
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

        <div className="w-full pb-5 pl-5 pr-3 md:mb-[35px] md:pr-[150px] md:pl-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Transfer To</p>
            </div>
            <div>
              <div className="flex mb-[40px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Ilham Danu</p>
                  <p className="text-[#7A7886] text-[14px] leading-[30px]">+62 813-8492-9994</p>
                </div>
              </div>
              <div className="mb-[25px]">
                <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Details</p>
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
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[55px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Notes</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">For buying some socks</p>
                </div>
              </div>
              <div className="mb-[25px] flex justify-end">
                <button onClick={() => setConfirmationPin(true)} className="border-1 bg-[#60bad7] hover:bg-[#cd7389] py-[16px] px-[48px] text-white text-[16px] leading-[25px] font-bold rounded-[12px]">
                  Continue
                </button>
                <ReactModal isOpen={confirmationPin} className=" md:ml-[300px] md:mt-[80px] outline-none rounded-[20px] w-max">
                  <div className="w-full  pl-5 pr-3 pb-5 md:pr-[150px]">
                    <div className="border-1 bg-white p-[30px]  rounded-[25px]">
                      <div className="flex">
                        <div className="mb-[50px] flex-1">
                          <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Enter PIN to Transfer</p>
                          <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                        </div>
                        <div>
                          <button onClick={() => setConfirmationPin(false)} className="text-[20px] text-[#3A3D42]">
                            X
                          </button>
                        </div>
                      </div>
                      <div className="mb-[70px] px-[50px] flex w-full justify-center">
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                        <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow pt-[15px] px-[15px]">
                          <span className="md:text-[28px] text-[#A9A9A999]">1</span>
                          <hr className="" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-end pr-[50px]">
                          <button type="submit" className="group border-1 bg-[#DADADA] hover:bg-[#cd7389] py-[16px] px-[40px]  rounded-[12px]">
                            <p className="text-[#88888F] group-hover:text-white text-[18px] leading-[24px] font-bold">Continue</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ReactModal>
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

export default Confirmation;
