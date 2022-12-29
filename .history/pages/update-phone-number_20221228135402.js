import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import plus from "../assets/plus.png";
import userBlue from "../assets/user-blue.png";
import logOut from "../assets/log-out.png";
import men from "../assets/man.png";
import gridBlack from "../assets/grid-black.png";
import arrowUp from "../assets/arrow-up.png";
import edit2 from "../assets/edit.png";
import arrowRight from "../assets/arrow-right2.png";
import lockInput from "../assets/lock-input.png";
import eye from "../assets/eye.png";
import phone from "../assets/phone2.png";
import { phoneNumberAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import withAuth from "./middleware/private-route";
import { useSelector } from "react-redux";
import http from "../helper/http";

function UpdatePhoneNumber() {
  const token = useSelector((state) => state.auth.token);

  const UpdatePhoneNumber = async (e) => {
    e.preventDefault();
    const values = {
      phoneNumber: e.target.phoneNumber.value,
    };
    console.log(values.phoneNumber);
    await http(token).patch("/profile/phone-number", value);
  };
  // const dispatch = useDispatch();

  // const phoneNumberUpdate = async (e) => {
  //   e.preventDefault();
  //   const phoneNumber = e.target.phone.value;

  //   try {
  //     const results = await dispatch(
  //       phoneNumberAction({
  //         phoneNumber,
  //       })
  //     );
  //     console.log(results.payload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="md:mr-[20px] flex flex-col md:mb-[35px]">
          <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
            <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-[670px]">
              <div className="flex-1">
                <div className="flex items-center pr-[96px] pt-5 md:pt-[52px] pl-[38px]">
                  <Image src={gridBlack} alt="grid" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7]">
                    Dashboard
                  </Link>
                </div>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                  <Image src={arrowUp} alt="arrowUp" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/search-receiver" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                    Transfer
                  </Link>
                </button>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                  <Image src={plus} alt="plus" className=" md:mr-[15px] w-[28px] h-[28px]" />
                  <Link href="top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
                    Top Up
                  </Link>
                </button>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] ">
                  <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                  <Image src={userBlue} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/profile" className="text-[#60bad7] text-[18px] leading-[31px]">
                    Profile
                  </Link>
                </button>
              </div>
              <div className="pb-[50px]">
                <button className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
                  <Image src={logOut} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/login" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pl-5 pr-3 pb-5  md:mb-[35px] md:pr-[150px] md:pb-0 md:pl-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px] pb-[230px]">
            <div className="mb-[123px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Edit Phone Number</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
            </div>
            <form onSubmit={UpdatePhoneNumber} className="md:px-[140px]">
              <div className="mb-[63px]">
                <label className="flex text-[#3A3D42] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={phone} alt="phone" className="mr-[20px]" />
                  <span className="text-[#3A3D42] text-[16px] font-semibold leading-[23px] mr-[15px]">+62</span>
                  <input name="phone" type="phone" placeholder="Enter your phone number" className="focus:outline-none w-full focus:font-semibold" />
                </label>
                <hr />
              </div>

              <div>
                <button type="submit" className="border-1 bg-[#DADADA] py-[16px] px-[110px] md:px-[125px] rounded-[12px] text-[#88888F] text-[18px] leading-[24px] font-bold">
                  Edit Phone Number
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="pl-5 pr-3 md:pl-[150px] md:pr-[150px] md:py-[20px] bg-[#7a4c75]">
        <div className="text-[#EFEFEFE5] text-[16px] leading-[28px] md:flex">
          <div className="flex-1 mb-2 md:mb-0">2020 CluePay. All right reserved.</div>
          <div className="font-semibold flex flex-col md:block">
            <span className="mr-[40px] mb-1 md:mb-0">+62 5637 8882 9901</span>
            <span>contact@cluepay.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withAuth(UpdatePhoneNumber);
