import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import men from "../assets/man.png";
import failed from "../assets/failed.png";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import http from "../helper/http";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { RxDownload } from "react-icons/rx";

const Success = () => {
  const token = useSelector((state) => state.auth.token);
  const amount = useSelector((state) => state.transfer.amount);
  const note = useSelector((state) => state.transfer.note);
  const time = useSelector((state) => state.transfer.transferTime);
  const dataTransfer = useSelector((state) => state.transfer);

  const [bio, setBio] = useState({});
  const [recipient, setRecipient] = useState({});
  const [alertPin, setAlertPin] = useState(false);
  const [pin, setPin] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const getBio = async () => {
    const { data } = await http(token).get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getRecipient = async () => {
    const { data } = await http(token).get(`/transactions/recipient/${id}`);
    return data;
  };

  useEffect(() => {
    getRecipient().then((data) => {
      setRecipient(data.results);
    });
  }, [id]);

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />
        <div className="w-full pl-5 pr-3 pb-5 md:mb-[35px] md:pr-[150px] md:pr-0 md:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div>
              <div className="flex justify-center mb-[40px]">
                <div className="flex flex-col items-center">
                  <Image src={failed} alt="failed" className="mb-[30px] inline-block" />
                  <p className="text-[#4D4B57] text-[22px] font-bold">Transfer Success</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Amount</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">IDR.{amount}</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Balance Left</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.balance - amount}</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Date & Time</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{moment(time).format("LLL")}</p>
                </div>
              </div>
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[40px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Notes</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{note}</p>
                </div>
              </div>
              <div className="mb-[20px]">
                <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Transfer To</p>
              </div>
              <div className="flex mb-[40px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  <Image src={men} alt="man" className="w-[70px] h-[70px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{recipient.firstName + "" + recipient.lastName}</p>
                  <p className="text-[#7A7886] text-[14px] leading-[30px]">{recipient.phoneNumber}</p>
                </div>
              </div>
              <div className=" flex justify-end hover:text-white">
                <button className="group border-1 bg-[#cd738926] hover:bg-[#cd7389] py-[16px] px-5 md:px-[48px] text-[16px] leading-[25px] font-bold rounded-[12px] flex mr-[20px]">
                  <RxDownload className="mr-[15px] w-[25px] h-[25px] text-[#cd7389] group-hover:text-white duration-300" />
                  <p className="text-[18px] font-bold leading-[24px] text-[#cd7389] group-hover:text-white duration-300">Download PDF</p>
                </button>
                <Link href="/home" className="border-1 bg-[#cd738926] hover:bg-[#cd7389] py-[16px] px-7 md:px-[48px] text-[#cd7389] hover:text-white text-[16px] leading-[25px] font-bold rounded-[12px] duration-300">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
