/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import http from '../../helper/http';
import arrowGreen from '../../assets/arrow-green.png';
import arrowRed from '../../assets/arrow-red.png';
import bell from '../../assets/bell.png';

function Navbar() {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const userId = decode.id;
  const router = useRouter();
  const [notification, setNotification] = useState([]);
  const [bio, setBio] = useState({});
  const [notif, setNotif] = useState(false);

  const getBio = async () => {
    const { data } = await http(token).get('https://68xkph-8888.preview.csb.app/profile');
    return data;
  };
  const getNotification = async () => {
    const { data } = await http(token).get('/transactions?page=1&limit=5', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  useEffect(() => {
    getNotification().then((data) => {
      setNotification(data.results);
    });
  }, []);

  const showNotif = () => {
    setNotif(!notif);
  };

  return (
    <div className="relative bg-white px-3 py-3 font-nunitoSans flex bg-grey shadow-lg rounded-br-2xl rounded-bl-2xl lg:px-[150px] lg:pt-[50px] lg:pb-[44px] mb-7">
      <Link href="/home" className="text-[29px] font-bold leading-[40px] text-[#60bad7] flex-1">
        CluePay
      </Link>
      <div className="lg:hidden flex flex-row-reverse cursor-pointer">
        <div onClick={() => router.push('/profile')} className="lg:mr-[20px]">
          {bio.picture ? <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/${bio?.picture}`} width="40" height="40" alt="profile" className="w-[40px] h-[40px] rounded-[50%]" /> : <HiOutlineUserCircle className="w-[40px] h-[40px]" />}
        </div>
        <div className="flex flex-col items-center justify-center mr-3 lg:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">{`${bio.firstName} ${bio.lastName}`}</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">{bio.phoneNumber}</span>
        </div>
        <div onClick={showNotif} className="flex items-center pr-5 lg:pr-0">
          <Image src={bell} width={25} height={25} alt="bell" className="" />
        </div>
      </div>
      <div className="hidden lg:flex">
        <div onClick={() => router.push('/profile')} className="lg:mr-[20px] cursor-pointer">
          {bio.picture ? <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/${bio?.picture}`} width="40" height="40" alt="profile" className="w-[40px] h-[40px] rounded-[50%]" /> : <HiOutlineUserCircle className="w-[40px] h-[40px]" />}
        </div>
        <div className="flex flex-col items-center justify-center mr-3 lg:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">{`${bio.firstName} ${bio.lastName}`}</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">{bio.phoneNumber}</span>
        </div>
        <div onClick={showNotif} className="flex items-center pr-5 lg:pr-0 cursor-pointer">
          <Image src={bell} width={25} height={25} alt="bell" className="" />
        </div>
      </div>
      {notif ? (
        <div className="absolute lg:right-44 top-40 bg-white p-[30px] shadow-lg rounded-[20px]">
          {notification?.map((list) => (
            <div key={list.id} className="py-[20px] px-[25px] flex shadow-xl rounded-[10px]">
              <div className="flex flex-col">
                {notification.recipientId === userId && notification.sendername ? (
                  <div className="flex">
                    <Image src={arrowGreen} alt="down-arrow" className="w-[30px] h-[30px] mr-3" />
                    <span className=" font-bold text-[16px] leading-[21px] text-[#1EC15F] ">
                      Accept from
                      {' '}
                      {list.recipientname}
                    </span>
                  </div>
                ) : (
                  <div className="flex">
                    <Image src={arrowRed} alt="up-arrow" className="w-[30px] h-[30px] mr-3" />
                    <span className=" font-bold text-[16px] leading-[21px] text-red-500 ">
                      Transfer to
                      {' '}
                      {list.recipientname}
                    </span>
                  </div>
                )}
                <span className="text-right text-[#43484F] text-[18px] font-bold">
                  IDR.
                  {list.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default Navbar;
