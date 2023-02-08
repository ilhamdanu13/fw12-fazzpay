import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

import search from "../assets/search.png";
import { SlUser } from "react-icons/sl";
import withAuth from "./middleware/private-route";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import http from "../helper/http";
import { useRouter } from "next/router";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function SearchReceiver() {
  const router = useRouter();
  const { id } = router.query;
  const token = useSelector((state) => state.auth.token);
  const [listTransaction, setListTransaction] = useState({});

  useEffect(() => {
    getListTransaction().then((data) => {
      setListTransaction(data);
    });
  }, []);

  const getListTransaction = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/transactions/recipient?page=1&limit=5");
    return data;
  };

  console.log(listTransaction);

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />

        <div className="w-full pb-5 pl-5 pr-3 md:pb-0 md:mb-[35px] md:pr-[150px] md:pr-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Search Receiver</p>
              <div className="flex border-1 relative">
                <Image src={search} alt="search" className="mr-[22px] absolute pt-[15px] left-3" />
                <input placeholder="Search receiver here" className="focus:outline-none w-full text-[#3A3D4266] text-[16px] border-1 bg-[#3A3D421A] py-[15px] pl-[54px]  rounded-[12px]" />
              </div>
            </div>

            <div className="">
              {listTransaction?.results?.map((list) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={"/recipient/" + list.id} className="flex mb-[60px] border-1 shadow-md p-[20px] rounded-[10px] w-full">
                  <div className="mr-[15px]">
                    {list.picture ? (
                      <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + list?.picture} width="70" height="70" alt="man" className="w-[70px] h-[70px] rounded-[50%]" />
                    ) : (
                      <SlUser className="w-[70px] h-[70px] text-[#dedede] " />
                    )}
                  </div>
                  <div className="">
                    <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{list.firstName + "  " + list.lastName}</p>
                    <p className="text-[#7A7886] text-[14px] leading-[19px]">{list.phoneNumber}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(SearchReceiver);
