import { BiUpArrowAlt, BiPlus, BiGridAlt, BiUser, BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
      <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-full">
        <div className="flex-1">
          <div className="flex items-center pr-[96px] pt-5 md:pt-[52px] pl-[38px]">
            <BiGridAlt className="mr-7 w-[25px] h-[25px]" />
            <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7]">
              <span>Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
            {/* <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" /> */}
            <BiUpArrowAlt className="mr-7 w-[25px] h-[25px]" />
            <Link href="/search-receiver" className="text-[#3A3D42CC] text-[18px] leading-[31px] hover:text-[#60bad7]">
              Transfer
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
            <BiPlus className="mr-7 w-[25px] h-[25px]" />
            <Link href="top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
              Top Up
            </Link>
          </div>
          <div className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
            <BiUser className="mr-7 w-[25px] h-[25px]" />
            <Link href="/profile" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
              Profile
            </Link>
          </div>
        </div>
        <div className="pb-[50px]">
          <div className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
            <BiLogOutCircle className="mr-7 w-[25px] h-[25px]" />
            <Link href="/login" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
