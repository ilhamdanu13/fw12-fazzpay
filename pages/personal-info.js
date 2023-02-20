import Link from 'next/link';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import http from '../helper/http';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function PersonalInfo() {
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = useState({});

  const getBio = async () => {
    const { data } = await http(token).get('https://68xkph-8888.preview.csb.app/profile');
    return data;
  };

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);
  return (
    <div className="font-nunitoSans bg-[#f5f1f3]">
      <Navbar />
      <div className="pt-[40px] lg:flex">
        <Sidebar />
        <div className="w-full pl-3 lg:pl-5 pr-3 pb-5 lg:mb-[35px] lg:pr-[150px] lg:pl-0 lg:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Personal Information</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] lg:w-[342px]">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
            </div>
            <div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">First Name</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.firstName}</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Last Name</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.lastName}</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Verified E-mail</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.email}</p>
                </div>
              </div>
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[55px]">
                <div className="flex-1">
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Phone Number</p>
                      <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.phoneNumber}</p>
                    </div>
                    <Link href="/update-phone-number" className="text-[16px] text-[#60bad7] pr-[35px] flex items-center">
                      Manage
                    </Link>
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
}

export default PersonalInfo;
