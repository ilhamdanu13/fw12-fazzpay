import Image from "next/image";
import previewProduct from "../assets/preview product2.png";
import mailInput from "../assets/mail.png";
import lockInput from "../assets/lock-input.png";
import peak from "../assets/peak.png";

import background from "../assets/background.png";
import Link from "next/link";
function resetPassword() {
  return (
    <div className="md:flex font-nunitoSans py-5 md:py-0">
      <div className="hidden md:block md:w-3/5 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px]">
        <div className="pl-[110px]">
          <span className="text-white text-[29px] leading-[40px] font-bold ">CluePay</span>
        </div>
        <div className="pl-[110px] mb-[15px]">
          <Image src={peak} alt="peak" className="w-[512px] h-[520px] rounded-[10px] border-4" />
        </div>
        <div className="pl-[110px] mb-[30px]">
          <h1 className="text-white text-[24px] leading-[32px] font-bold">App that Covering Banking Needs.</h1>
        </div>
        <div className="pl-[110px]">
          <p className="text-[#FFFFFFCC] text-[16px] leading-[23px] w-[500px]">
            CluePay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in CluePay everyday with worldwide users coverage.
          </p>
        </div>
      </div>
      <div className="">
        <div className="md:hidden pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
        <div className="md:pt-[121px] pl-[50px] mb-[63px] pr-[50px] md:pr-0">
          <h2 className="md:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
          <p className="md:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
        </div>
        <div className="pl-[50px] pr-[50px] md:pr-[50px] mb-[90px]">
          <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
            <Image src={mailInput} alt="mail-input" className="mr-[20px]" />
            <input name="email" type="email" placeholder="Enter your e-mail" className="focus:outline-none w-full " />
          </label>
          <hr className="text-[#A9A9A999] mb-[73px]" />
        </div>
        <div className="pl-[50px] pr-[50px]">
          <div className="">
            <Link href="#" className="border-1 bg-[#DADADA] text-[#88888F] text-[18px] py-[16px] md:px-[240px] flex justify-center rounded-[12px] w-full">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resetPassword;
