import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
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
import PrivateRoute from "./middleware/private-route";

function Home() {
  return (
    <PrivateRoute>
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
                  <Image src={plus} alt="plus" className="md:mr-[10px] w-[28px] h-[28px]" />
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
          <div className="pl-5 pr-3 md:pl-0 md:pr-[150px] md:mb-[35px]">
            <div className="border-1 bg-[#7a4c75] md:flex rounded-[20px] mb-[20px]">
              <div className="flex-1">
                <div className="flex flex-col p-[30px]">
                  <span className="text-[#E0E0E0] text-[18px] leading-[31px] mb-[10px]">Balance</span>
                  <span className="text-[#FFFFFF] text-[40px] font-bold leading-[54px] mb-[30px]">Rp120.000</span>
                  <span className="text-[#DFDCDC] text-[14px] font-semibold leading-[20px]">+62 813-9387-7946</span>
                </div>
              </div>
              <div className="p-[30px]">
                <div className="mb-[16px]">
                  <Link href="/search-receiver" className="flex border-2 border-white bg-[#FFFFFF33] py-[16px] px-[35px] text-white rounded-[10px]">
                    <Image src={arrowUp2} alt="arrowUp2" className="mr-[15px]" />
                    <p>Transfer</p>
                  </Link>
                </div>
                <div>
                  <Link href="/top-up" className="flex border-2 border-white bg-[#FFFFFF33] py-[16px] px-[35px] text-white rounded-[10px]">
                    <Image src={plus2} alt="plus" className="mr-[15px]" />
                    <p>Top Up</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex  md:pr-0">
              <div className="w-full md:w-[463px] mr-[20px]">
                <div className="border-1 bg-white rounded-[25px] mb-3 md:mb-0">
                  <div className="pl-[35px] pt-[44px] flex pr-[39px] mb-[60px]">
                    <div className="flex-1">
                      <Image src={arrowUpGreen} alt="arrowup" className="mb-[15px]" />
                      <p className="text-[#6A6A6A] text-[14px] leading-[19px] mb-[8px]">Income</p>
                      <span className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Rp2.120.000</span>
                    </div>
                    <div>
                      <Image src={arrowRed} alt="arrowred" className="mb-[15px]" />
                      <p className="text-[#6A6A6A] text-[14px] leading-[19px] mb-[8px]">Expense</p>
                      <span className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Rp1.560.000</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex mb-[15px] pl-[66px] md:pr-[39px]">
                      <div className="mr-[30px]">
                        <div className="border-1 bg-[#cd7389] w-[14px] h-[220px] rounded-[6px]"></div>
                      </div>
                      <div className="mr-[30px] flex flex-col-reverse">
                        <div className="border-1 bg-[#cd7389] w-[14px] h-[97px] rounded-[6px] "></div>
                      </div>
                      <div className="mr-[30px] flex flex-col-reverse">
                        <div className="border-1 bg-[#fadba9] w-[14px] h-[149px] rounded-[6px] "></div>
                      </div>
                      <div className="mr-[30px] flex flex-col-reverse">
                        <div className="border-1 bg-[#fadba9] w-[14px] h-[160px] rounded-b-[6px]"></div>
                        <div className="border-1 bg-[#cd7389] w-[14px] h-[15px] rounded-full mb-1"></div>
                      </div>
                      <div className="mr-[30px] flex flex-col-reverse">
                        <div className="border-1 bg-[#cd7389] w-[14px] h-[138px] rounded-[6px] "></div>
                      </div>
                      <div className="mr-[30px] flex flex-col-reverse">
                        <div className="border-1 bg-[#cd7389] w-[14px] h-[197px] rounded-[6px]"></div>
                      </div>
                      <div className="flex flex-col-reverse">
                        <div className="border-1 bg-[#fadba9] w-[14px] h-[155px] rounded-[6px]"></div>
                      </div>
                    </div>
                    <div className="text-[14px] text-[#60bad7] flex pl-[60px] pb-[13px]">
                      <div className="mr-[25px]">
                        <p>Sat</p>
                      </div>
                      <div className="mr-[18px]">
                        <p>Sun</p>
                      </div>
                      <div className="mr-[18px]">
                        <p>Mon</p>
                      </div>
                      <div className="mr-[18px]">
                        <p>Tue</p>
                      </div>
                      <div className="mr-[18px]">
                        <p>Wed</p>
                      </div>
                      <div className="mr-[22px]">
                        <p>Thu</p>
                      </div>
                      <div className="">
                        <p>Fri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:mb-[35px] pb-5 md:pb-0">
                <div className="border-1 bg-white p-[30px] rounded-[25px]">
                  <div className="flex mb-[40px]">
                    <p className="flex-1 text-[#3A3D42] text-[18px] leading-[25px] font-bold">Transaction History</p>
                    <Link href="/history" className="text-[#60bad7] text-[14px] font-semibold leading-[20px] flex items-center">
                      See all
                    </Link>
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
    </PrivateRoute>
  );
}

export default Home;
