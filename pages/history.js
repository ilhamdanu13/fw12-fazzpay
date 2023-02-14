import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SlUser } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import jwtDecode from 'jwt-decode';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import http from '../helper/http';

function History() {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const userId = decode.id;
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);

  const getHistory = async () => {
    const { data } = await http(token).get(`/transactions?page=${page}&limit=5`, {
      headers: {
        Authotizaton: `Bearer ${token}`,
      },
    });
    return data;
  };
  useEffect(() => {
    getHistory().then((data) => {
      setHistory(data.results);
    });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page < 1) {
      setPage(1);
      return;
    }
    setPage(page - 1);
  };

  return (
    <div>
      <div className="bg-[#f5f1f3] ">
        <Navbar />
        <div className="pt-3 md:pt-[40px] md:flex font-nunitoSans">
          <Sidebar />

          <div className="w-full pb-5 md:pb-0 md:mb-[35px] pl-3 lg:pl-5 md:pl-0 pr-3 md:pr-[150px]">
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
                {history?.map((list) => (
                  <div key={list.id} className="flex mb-[40px]">
                    <div className="mr-[5px]">
                      {list.recipientPicture ? (
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/${list?.recipientPicture}`} width="70" height="70" alt="man" className="w-[70px] h-[70px] rounded-[50%]" />
                      ) : (
                        <SlUser className="w-[70px] h-[70px] text-[#dedede] " />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{list.recipientname}</p>
                      <p className="text-[#7A7886] text-[14px] leading-[19px] font-semibold">{list.notes}</p>
                    </div>
                    <div className="flex items-center">
                      {list.recipientId === userId ? (
                        <span className=" font-bold text-[16px] leading-[21px] text-[#1EC15F] ">
                          + IDR.
                          {list.amount}
                        </span>
                      ) : (
                        <span className=" font-bold text-[16px] leading-[21px] text-red-500 ">
                          - IDR.
                          {list.amount}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f1f3] flex mb-7">
          <div className="lg:w-1/2" />
          <div className="lg:w-1/2 flex px-3 lg:px-[100px]">
            <BsArrowLeftCircle onClick={prevPage} className="w-[40px] h-[40px]  rounded-[50%] mr-7 hover:bg-[#7a4c75] hover:text-white duration-300 hover:shadow-lg cursor-pointer" />
            <BsArrowRightCircle onClick={nextPage} className="w-[40px] h-[40px]  rounded-[50%] mr-7 hover:bg-[#7a4c75] hover:text-white duration-300 hover:shadow-lg cursor-pointer" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default History;
