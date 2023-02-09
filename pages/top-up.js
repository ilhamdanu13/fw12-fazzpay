import Navbar from "./components/navbar";
import withAuth from "./middleware/private-route";
import { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import http from "../helper/http";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/router";
import Footer from "./components/footer";

const TopUp = () => {
  const token = useSelector((state) => state.auth.token);
  const [topUp, setTopUp] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const router = useRouter();
  const TopupBalance = async (e) => {
    e.preventDefault();
    const values = {
      amount: e.target.amount.value,
    };
    console.log(values.amount);
    await http(token).post("/transactions/topup", values);
    setAlertSuccess(true);
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  };

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />

        <div className="w-full pb-5 pl-5 pr-3 md:pb-0 md:mb-[35px] md:pr-[150px] md:pr-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <button onClick={() => setTopUp(true)} className="group border-1 bg-[#DADADA] hover:bg-[#cd7389] py-[16px] px-[40px]  rounded-[12px] mb-5">
              <p className="text-[#88888F] group-hover:text-white text-[18px] leading-[24px] font-bold">Top Up</p>
            </button>
            <div>
              <p className="text-[#3A3D4299] text-[16px]">Enter the amount of money, and click submit</p>

              <ReactModal isOpen={topUp} className="pl-7 md:ml-[450px] md:mt-[80px] outline-none rounded-[20px] w-max">
                <div className="w-full  pl-5 pr-3 pb-5 md:pr-[150px]">
                  <div className="border-1 bg-white p-[30px]  rounded-[25px]">
                    <div className="flex">
                      <div className="mb-[50px] flex-1">
                        <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Topup</p>
                        <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Enter the amount of money, and click submit </p>
                      </div>
                      <div>
                        <button onClick={() => setTopUp(false)} className="text-[20px] text-[#3A3D42]">
                          X
                        </button>
                      </div>
                    </div>
                    <form onSubmit={TopupBalance}>
                      <div className="mb-7 flex w-full justify-center">
                        <div className="border-2 rounded-[10px] py-[16px] px-[70px] text-center tracking-widest w-full">
                          <input name="amount" placeholder="" className="focus:outline-none" />
                          <hr className="w-full px-[20px]" />
                        </div>
                      </div>
                      <div>
                        {alertSuccess ? (
                          <div className="bg-green-200 border-2 border-green-500 py-3 rounded flex justify-center items-center mb-5">
                            <span>Top up success</span>
                          </div>
                        ) : (
                          false
                        )}
                        <div className="flex justify-end">
                          <button type="submit" className="group border-1 bg-[#DADADA] hover:bg-[#cd7389] py-[16px] px-[55px]  rounded-[12px]">
                            <p className="text-[#88888F] group-hover:text-white text-[18px] leading-[24px] font-bold">Submit</p>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </ReactModal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(TopUp);
