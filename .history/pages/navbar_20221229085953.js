import Image from "next/image";
import Link from "next/link";
import profile from "../assets/profile.png";
import bell from "../assets/bell.png";
import man from "../assets/man.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helper/http";

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = useState({});
  console.log(bio);
  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile");
    return data;
  };
  return (
    <div className="px-3 py-3 font-nunitoSans flex bg-grey shadow-lg rounded-br-2xl rounded-bl-2xl md:px-[150px] md:pt-[50px] md:pb-[44px]">
      <Link href="/home" className="text-[29px] font-bold leading-[40px] text-[#60bad7] flex-1">
        CluePay
      </Link>
      <div className="md:hidden flex flex-row-reverse">
        <div className="md:mr-[20px]">
          <Image src={man} alt="man" className="w-[52px] h-[52px]" />
        </div>
        <div className="flex flex-col items-center justify-center mr-3 md:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">{bio.firstName + " " + bio.lastName}</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">+62 8139 3877 7946</span>
        </div>
        <div className="flex items-center pr-5 md:pr-0">
          <Image src={bell} alt="bell" className="" />
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="md:mr-[20px]">
          <Image src={man} alt="man" className="w-[52px] h-[52px]" />
        </div>
        <div className="flex flex-col items-center justify-center mr-3 md:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">Ilham Danu</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">+62 8139 3877 7946</span>
        </div>
        <div className="flex items-center pr-5 md:pr-0">
          <Image src={bell} alt="bell" className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
