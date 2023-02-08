import Image from "next/image";
import Link from "next/link";
import { SlUser } from "react-icons/sl";
import Navbar from "../components/Navbar";
import { FiEdit2 } from "react-icons/fi";
import withAuth from "../middleware/private-route";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import http from "../../helper/http";
import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { inputAmount } from "../../redux/reducers/transfer";

function InputAmountBlank() {
  const router = useRouter();
  const token = useSelector((state) => state?.auth?.token);
  const { id } = router.query;
  const [recipient, setRecipient] = useState({});
  const [bio, setBio] = useState({});
  const [newAmount, setNewAmount] = useState("");
  const [newNote, setNewNote] = useState("");
  const [transferTime, setTranferTime] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      getRecipient().then((data) => {
        setRecipient(data.results);
      });
    }
  }, [id]);

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("/profile");
    return data;
  };
  const getRecipient = async () => {
    const { data } = await http(token).get(`/transactions/recipient/${id}`);
    return data;
  };

  const fillAmount = (e) => {
    e.preventDefault();
    dispatch(
      inputAmount({
        recipientId: id,
        amount: newAmount,
        note: newNote,
        transferTime: transferTime,
      })
    );
    router.push("/confirmation/" + id);
  };

  console.log(recipient);
  console.log(bio);

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />

        <div className="w-full pb-5 pl-5 pr-3 md:pb-0 md:mb-[35px] md:pr-[150px] md:pr-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Transfer Money</p>
            </div>

            <div className="mb-[40px]">
              <button className="flex mb-[60px] border-1 shadow-md p-[20px] rounded-[10px] w-full">
                <div className="mr-[15px]">
                  {recipient.picture ? (
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + recipient.picture} width="70" height="70" alt="profile" className="w-[70px] h-[70px] rounded-[50%]" />
                  ) : (
                    <SlUser className="w-[70px] h-[70px] text-[#dedede] rounded-[50%] " />
                  )}
                </div>
                <div className="pl-3">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{recipient.firstName + " " + recipient.lastName}</p>
                  <p className="text-[#7A7886] text-[14px] leading-[19px] font-semibold pl-[10px]">{recipient.phoneNumber}</p>
                </div>
              </button>
            </div>
            <div className="text-[#7A7886] text-[16px] w-[336px] mb-[65px]">Type the amount you want to transfer and then press continue to the next steps.</div>

            <form className="">
              <div className="flex flex-col justify-center items-center">
                <label className="flex flex-col justify-center items-center">
                  <input
                    name="amount"
                    onChange={(e) => setNewAmount(e.target.value)}
                    type="number"
                    min="10000"
                    max={recipient.balance}
                    placeholder="0.00"
                    className="text-[#6379F4] text-[42px] font-bold focus:outline-none text-center mb-[39px] "
                  />
                  <p className="text-[#3A3D42] text-[16px] font-bold mb-[63px]">IDR.{bio.balance} Available</p>
                </label>
                <div className="w-1/2">
                  <div className="flex">
                    <FiEdit2 className="text-[#6379F4] text-[25px] mr-3" />
                    <input name="note" onChange={(e) => setNewNote(e.target.value)} placeholder="Add some notes" className="text-[#6379F4] text-[16px] mb-[12px] focus:outline-none w-full" />
                  </div>

                  <hr className=" w-full  mb-[96px]" />
                </div>
                <button onClick={fillAmount} type="submit" className="border-1 bg-[#60bad7] hover:bg-[#cd7389] py-[16px] px-[48px] text-white text-[16px] leading-[25px] font-bold rounded-[12px]">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(InputAmountBlank);