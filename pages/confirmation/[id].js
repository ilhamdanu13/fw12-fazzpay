import Image from "next/image";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import http from "../../helper/http";
import { useRouter } from "next/router";
import { transferAction } from "../../redux/actions/transfer";
import { SlUser } from "react-icons/sl";

const Confirmation = () => {
  const token = useSelector((state) => state.auth.token);
  const amount = useSelector((state) => state.transfer.amount);
  const notes = useSelector((state) => state.transfer.notes);
  const time = useSelector((state) => state.transfer.transferTime);
  const dataTransfer = useSelector((state) => state.transfer);

  const [bio, setBio] = useState({});
  const [recipient, setRecipient] = useState({});
  const [alertPin, setAlertPin] = useState(false);
  const [balanceLeft, setBalanceLeft] = useState(null);
  const [pin, setPin] = useState("");
  const [alertNullPin, setAlertNullPin] = useState(false);
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

  const cb = () => {
    setTimeout(() => {
      router.push("/success/" + id);
    }, 1500);
  };
  const tranfer = () => {
    if (!bio.pin) {
      console.log("buat pin dulu");
    } else {
      try {
        dispatch(transferAction({ ...dataTransfer, pin, token }));
        setBalanceLeft(bio.balance - amount);
        if (pin !== bio.pin) {
          setAlertPin(true);
          return;
        }
        cb();
      } catch (error) {
        setTimeout(() => {
          router.push("/failed/" + id);
        }, 1500);
        console.log(error);
      }
    }
  };

  console.log(recipient);
  console.log(bio);

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />

        <div className="w-full pb-5 pl-5 pr-3 md:mb-[35px] md:pr-[150px] md:pl-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Transfer To</p>
            </div>
            <div>
              <div className="flex mb-[40px] border-1 shadow-md p-[20px] rounded-[10px]">
                <div className="mr-[15px]">
                  {recipient.picture ? (
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + recipient.picture} width="70" height="70" alt="man" className="w-[70px] h-[70px] rounded-[50%]" />
                  ) : (
                    <SlUser className="w-[70px] h-[70px] text-[#dedede] rounded-[50%] " />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[#4D4B57] text-[16px] leading-[21px] font-bold mb-[9px]">{recipient.firstName + " " + recipient.lastName}</p>
                  <p className="text-[#7A7886] text-[14px] leading-[30px]">{recipient.phoneNumber}</p>
                </div>
              </div>
              <div className="mb-[25px]">
                <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold">Details</p>
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
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[55px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Notes</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{notes}</p>
                </div>
              </div>
              {!bio.pin ? (
                <div className="mb-[25px] flex justify-end">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn">
                    Continue
                  </label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">Oops.. you have not set PIN!</h3>
                      <p className="py-4">Please set PIN before transfer...</p>
                      <button onClick={() => router.push("/change-pin")} className="btn absolute right-3 top-20">
                        Yay!
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                false
              )}

              {bio.pin ? (
                <div className="mb-[25px] flex justify-end">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn hover:bg-[#60bad7] hover:border-[#60bad7]">
                    Continue
                  </label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">Input PIN</h3>
                      <div className="flex justify-center items-center">
                        <input onChange={(e) => setPin(e.target.value)} name="pin" className="pl-5 text-[38px] w-1/2 lg:w-1/3 focus:outline-none mb-3" />
                        <hr />
                      </div>

                      {alertPin ? (
                        <div className="alert alert-error shadow-lg mb-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Wrong PIN!</span>
                          </div>
                        </div>
                      ) : (
                        false
                      )}
                      <div className="flex justify-end items-end">
                        <button onClick={tranfer} type="submit" className="btn hover:bg-[#60bad7] hover:border-[#60bad7]">
                          Yay!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
