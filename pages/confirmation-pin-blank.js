import Image from "next/image";
import Navbar from "./components/navbar";
import men from "../assets/man.png";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function ConfirmationPinBlank() {
  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] flex">
        <Sidebar />

        <div className="w-full mb-[35px] pr-[150px]">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Transfer To</p>
            </div>
            <div>
              <div className="flex mb-[40px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">Ilham Danu</p>
                  <p className="text-[#7A7886] text-[14px] leading-[30px]">+62 813-8492-9994</p>
                </div>
              </div>
              <div className="mb-[25px]">
                <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Details</p>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Amount</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">Rp100.000</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Balance Left</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">Rp20.000</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Date & Time</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">May 11, 2020 - 12.20</p>
                </div>
              </div>
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[55px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Notes</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">For buying some socks</p>
                </div>
              </div>
              <div className="mb-[25px] flex justify-end">
                <button className="border-1 bg-[#60bad7] hover:bg-[#cd7389] py-[16px] px-[48px] text-white text-[16px] leading-[25px] font-bold rounded-[12px]">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmationPinBlank;
