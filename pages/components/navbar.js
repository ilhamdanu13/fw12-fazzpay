import Image from "next/image";
import Link from "next/link";
import bell from "../../assets/bell.png";
import man from "../../assets/man.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import http from "../../helper/http";

function Navbar() {
  const token = useSelector((state) => state?.auth?.token);

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
    <div className="bg-white px-3 py-3 font-nunitoSans flex bg-grey shadow-lg rounded-br-2xl rounded-bl-2xl lg:px-[150px] lg:pt-[50px] lg:pb-[44px] mb-7">
      <Link href="/home" className="text-[29px] font-bold leading-[40px] text-[#60bad7] flex-1">
        CluePay
      </Link>
      <div className="lg:hidden flex flex-row-reverse">
        <div className="lg:mr-[20px]">
          <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + bio?.picture} width="40" height="40" alt="profile" className="w-[25px] h-[25px]" />
        </div>
        <div className="flex flex-col items-center justify-center mr-3 lg:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">{bio.firstName + " " + bio.lastName}</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">{bio.phoneNumber}</span>
        </div>
        <div className="flex items-center pr-5 lg:pr-0">
          <Image src={bell} width={25} height={25} alt="bell" className="" />
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="lg:mr-[20px]">
          <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + bio?.picture} width="40" height="40" alt="profile" className="w-[25px] h-[25px]" />
        </div>
        <div className="flex flex-col items-center justify-center mr-3 lg:mr-[33px] ">
          <span className="text-[#3A3D42] text-[18px] leading-[31px] font-bold">{bio.firstName + " " + bio.lastName}</span>
          <span className="text-[#3A3D42E5] text-[13px] leading-[24px]">{bio.phoneNumber}</span>
        </div>
        <div className="flex items-center pr-5 lg:pr-0">
          <Image src={bell} width={25} height={25} alt="bell" className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
