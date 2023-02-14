import React from 'react';
import {
  BiUpArrowAlt, BiPlus, BiGridAlt, BiUser, BiLogOutCircle,
} from 'react-icons/bi';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../redux/reducers/auth';

function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="pl-3 pr-3 lg:pr-0 lg:pl-[150px] lg:mr-[20px] lg:h-[690px] lg:mb-[35px] mb-5">
      <div className="block border-1 bg-white rounded-[25px] lg:flex flex-col lg:h-full">
        <div className="flex-1">
          <div className="flex items-center pr-[96px] pt-5 lg:pt-[52px] pl-[38px]">
            <BiGridAlt className="mr-7 w-[25px] h-[25px]" />
            <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px]">
              <span>Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 lg:pt-[64px] pl-[38px]">
            {/* <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" /> */}
            <BiUpArrowAlt className="mr-7 w-[25px] h-[25px]" />
            <Link href="/search-receiver" className="text-[#3A3D42CC] text-[18px] leading-[31px] hover:text-[#60bad7]">
              Transfer
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 lg:pt-[64px] pl-[38px]">
            <BiPlus className="mr-7 w-[25px] h-[25px]" />
            <Link href="/top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
              Top Up
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 lg:pt-[64px] pl-[38px]">
            <BiUser className="mr-7 w-[25px] h-[25px]" />
            <Link href="/profile" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
              Profile
            </Link>
          </div>
        </div>
        <div className="pb-[50px]">
          <div className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
            <BiLogOutCircle className="mr-7 w-[25px] h-[25px]" />
            <button type="submit" onClick={handleLogout} className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
