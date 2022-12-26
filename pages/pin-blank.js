import Image from "next/image";
import previewProduct from "../assets/preview product2.png";
import mailInput from "../assets/mail.png";
import lockInput from "../assets/lock-input.png";
import person from "../assets/person.png";
import peak from "../assets/peak.png";

import background from "../assets/background.png";
import Link from "next/link";
function PinBlank() {
  return (
    <div className="md:flex font-nunitoSans py-5 md:py-0">
      <div className="hidden md:block md:w-2/3 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px] pr-[50px] md:pr-0">
        <div className="pl-[100px]">
          <span className="text-white text-[29px] leading-[40px] font-bold ">CluePay</span>
        </div>
        <div className="pl-[70px] mb-[15px]">
          <Image src={peak} alt="peak" className="w-[512px] h-[520px] rounded-[10px] border-4" />
        </div>
        <div className="pl-[100px] mb-[30px]">
          <h1 className="text-white text-[24px] leading-[32px] font-bold">App that Covering Banking Needs.</h1>
        </div>
        <div className="pl-[100px]">
          <p className="text-[#FFFFFFCC] text-[16px] leading-[23px] w-[500px]">
            CluePay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in CluePay everyday with worldwide users coverage.
          </p>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="md:hidden pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[42px] ">CluePay</div>
          <div className="flex flex-col justify-center md:pt-[121px] pl-[50px] mb-[50px] pr-[50px] md:pr-[50px] md:block">
            <h2 className=" md:w-[500px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
            <p className=" md:w-[500px] text-[#3A3D4299] text-[16px] leading-[30px]">
              Create 6 digits pin to secure all your money and your data in CluePay app. Keep it secret and don’t tell anyone about your CluePay account password and the PIN.
            </p>
          </div>
        </div>
        <div className="mb-[90px] px-[50px] flex w-full justify-center">
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow md:mr-[23px] pt-[15px] px-[15px] mr-[14px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
          <div className="border-2 md:pt-[30px] pb-[10px] md:px-[26px] rounded-[10px] shadow pt-[15px] px-[15px]">
            <span className="md:text-[28px] text-[#A9A9A999]">1</span>
            <hr className="" />
          </div>
        </div>
        <div className="pl-[50px] pr-[50px] md:pr-[50px] ">
          <div className="">
            <Link href="#" className="border-1 bg-[#DADADA] text-[#88888F] text-[18px] flex justify-center py-[16px] md:px-[240px] rounded-[12px] w-full">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinBlank;
