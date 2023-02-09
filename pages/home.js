import Image from "next/image";
import Link from "next/link";
import arrowUp2 from "../assets/arrow-up2.png";
import plus2 from "../assets/plus2.png";
import arrowUpGreen from "../assets/arrow-green.png";
import arrowRed from "../assets/arrow-red.png";
import { SlUser } from "react-icons/sl";
import withAuth from "./middleware/private-route";
import { useState } from "react";
import { useEffect } from "react";
import http from "../helper/http";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import jwtDecode from "jwt-decode";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  const decode = jwtDecode(token);
  const userId = decode.id;
  const [history, setHistory] = useState([]);
  const [bio, setBio] = useState({});

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  const getHistory = async () => {
    const { data } = await http(token).get("/transactions?page=1&limit=4", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  useEffect(() => {
    getHistory().then((data) => {
      setHistory(data.results);
    });
  }, []);

  const reformattedHistory = history.map(({ recipientId, amount }) => ({ [recipientId]: amount }));
  console.log(reformattedHistory);

  return (
    <div className="bg-[#f5f1f3] ">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" flex font-nunitoSans w-full">
          <div className="pl-3 lg:pl-5 pr-3 lg:pr-[150px] lg:mb-[35px]">
            <div className="border-1 bg-[#7a4c75] flex flex-col lg:flex-row rounded-[20px] mb-[20px]">
              <div className="flex-1">
                <div className="flex flex-col p-[30px]">
                  <span className="text-[#E0E0E0] text-[18px] leading-[31px] mb-[10px]">Balance</span>
                  <span className="text-[#FFFFFF] text-[40px] font-bold leading-[54px] mb-[30px]">IDR.{bio.balance}</span>
                  <span className="text-[#DFDCDC] text-[14px] font-semibold leading-[20px]">{bio.phoneNumber}</span>
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
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[463px] lg:mr-[20px]">
                <div className="border-1 bg-white rounded-[25px] mb-3 lg:mb-0">
                  <div className="pl-3 lg:pl-[35px] pt-[44px] flex pr-3 lg:pr-[39px] mb-[60px] ">
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
                    <div className="flex mb-[15px] pl-7 lg:pl-[66px] lg:pr-[39px]">
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
                    <div className="text-[14px] text-[#60bad7] flex pl-5 lg:pl-[60px] pb-[13px]">
                      <div className="lg:mr-[25px] mr-5">
                        <p>Sat</p>
                      </div>
                      <div className="lg:mr-[18px] mr-5">
                        <p>Sun</p>
                      </div>
                      <div className="lg:mr-[18px] mr-5">
                        <p>Mon</p>
                      </div>
                      <div className="lg:mr-[18px] mr-5">
                        <p>Tue</p>
                      </div>
                      <div className="lg:mr-[18px] mr-5">
                        <p>Wed</p>
                      </div>
                      <div className="lg:mr-[22px] mr-5">
                        <p>Thu</p>
                      </div>
                      <div className="">
                        <p>Fri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:mb-[35px] pb-5 lg:pb-0">
                <div className="border-1 bg-white p-[30px] rounded-[25px]">
                  <div className="flex mb-[40px]">
                    <p className="flex-1 text-[#3A3D42] text-[18px] leading-[25px] font-bold">Transaction History</p>
                    <Link href="/history" className="text-[#60bad7] text-[14px] font-semibold leading-[20px] flex items-center">
                      See all
                    </Link>
                  </div>
                  <div>
                    {history?.map((list, i) => (
                      <div key={i} className="flex mb-[40px]">
                        <div className="mr-[15px]">
                          {list.recipientPicture ? (
                            <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + list?.recipientPicture} width="70" height="70" alt="man" className="w-[45px] h-[45px] rounded-[50%]" />
                          ) : (
                            <SlUser className="w-[45px] h-[45px] text-[#dedede] rounded-[50%]" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-[#4D4B57] text-[14px] leading-[21px] font-bold mb-[9px]">{list.recipientname}</p>
                          <p className="text-[#7A7886] text-[12px] leading-[19px]">{list.notes}</p>
                        </div>
                        <div className="flex items-center">
                          {list.recipientId === userId ? (
                            <span className=" font-bold text-[16px] leading-[21px] text-[#1EC15F] ">+ IDR.{list.amount}</span>
                          ) : (
                            <span className=" font-bold text-[16px] leading-[21px] text-red-500 ">- IDR.{list.amount}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(Home);
