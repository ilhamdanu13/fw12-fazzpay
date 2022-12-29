import Image from "next/image";
import previewProduct from "../assets/preview product2.png";
import mailInput from "../assets/mail.png";
import lockInput from "../assets/lock-input.png";
import person from "../assets/person.png";
import peak from "../assets/peak.png";

import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/auth";
import { useEffect } from "react";
// import background from "../assets/background.png";

function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const pin = e.target.pin.value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);

    const cb = () => {
      router.push("login");
    };
    try {
      const results = await dispatch(
        registerAction({
          firstName,
          lastName,
          email,
          password,
          pin,
          cb,
        })
      );
      console.log(results.payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:flex font-nunitoSans py-5 md:py-0">
      <div className="hidden md:block md:w-3/5 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px] pr-[50px] md:pr-0">
        <div className="pl-[110px] mb-[10px]">
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
      <div>
        <div className="md:hidden pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
        <div className="md:pt-[121px] pl-[50px] mb-[63px] pr-[50px] md:pr-0">
          <h2 className="md:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="md:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">Transfering money is eassier than ever, you can access CluePay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        </div>
        <form onSubmit={register}>
          <div className="pl-[50px] pr-[50px] md:pr-0 mb-[40px]">
            <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
              <Image src={person} alt="person" className="mr-[20px]" />
              <input name="firstName" type="text" placeholder="Enter your firstname" className="focus:outline-none w-full " />
            </label>
            <hr className="text-[#A9A9A999] mb-[44px]" />
            <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
              <Image src={person} alt="person" className="mr-[20px]" />
              <input name="lastName" type="text" placeholder="Enter your lastname" className="focus:outline-none w-full " />
            </label>
            <hr className="text-[#A9A9A999] mb-[44px]" />
            <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
              <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
              <input name="email" type="email" placeholder="Enter your e-mail" className="focus:outline-none w-full " />
            </label>
            <hr className="text-[#A9A9A999] mb-[44px]" />
            <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
              <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
              <input name="password" type="password" placeholder="Create your password" className="focus:outline-none w-full " />
            </label>
            <hr className="text-[#A9A9A999] mb-[44px]" />
            <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
              <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
              <input name="pin" type="password" placeholder="Create pin" className="focus:outline-none w-full " />
            </label>
            <hr className="text-[#A9A9A999] mb-[44px]" />
          </div>
          <div className="mb-[40px] pl-[50px]">
            <button type="submit" className="border-1 bg-[#DADADA] text-[#88888F] text-[18px] flex justify-center py-[16px] rounded-[12px] w-full">
              Sign Up
            </button>
          </div>
        </form>
        <div className="pl-[50px] pr-[50px] md:pr-0 pb-[51px]">
          <div className="flex justify-center">
            <p className="text-[16px] text-[#3A3D42CC] font-bold leading-[26px] mr-2">Already have an account? Let’s</p>
            <Link href="/login" className="text-[16px] text-[#6379F4] leading-[26px] font-bold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
