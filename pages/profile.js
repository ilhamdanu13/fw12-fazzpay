import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { FiEdit3 } from "react-icons/fi";
import men from "../assets/man.png";

import edit2 from "../assets/edit.png";
import arrowRight from "../assets/arrow-right2.png";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helper/http";
import withAuth from "./middleware/private-route";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function Profile() {
  const token = useSelector((state) => state?.auth?.token);
  const [picture, setPicture] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertSize, setAlertSize] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const [bio, setBio] = useState({});

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile");
    return data;
  };

  const upload = async (e) => {
    e.preventDefault();
    const file = e.target.picture.files[0];
    console.log(file);
    if (file?.size > 1024 * 1024 * 2) {
      setAlertSize(true);
    } else {
      try {
        const form = new FormData();
        form.append("picture", file);
        const { data } = await http(token).post("/profile", form);
        setAlertSize(false);
        setAlertSuccess(true);
        setTimeout(() => {
          router.reload();
          setPicture(false);
        }, 3000);
      } catch (error) {
        window.alert(error.response);
      }
    }
  };

  const handlerLogout = () => {
    dispatch(logoutAction());
    router.push("/login");
  };

  return (
    <div className="font-nunitoSans bg-[#f5f1f3]">
      <Navbar />
      <div className="lg:flex">
        <Sidebar />
        <div className="pl-5 pr-3 lg:pl-0 lg:pr-[150px] w-full pb-5 lg:pb-[33px]">
          <div className="border-1 bg-white pt-[48px] pb-[75px] px-5 lg:px-[150px] rounded-[25px]">
            <div className="text-center mb-[50px]">
              <div className="flex justify-center">
                <Image src={`${process.env.NEXT_PUBLIC_URL}/upload/` + bio?.picture} alt="profile" width="80" height="80" className="w-[80px] h-[80px]" />
              </div>

              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="btn bg-white border-0">
                <FiEdit3 className="w-[25px[ h-[25px] mr-[10px] text-black" />
                <span className="text-[#7A7886] text-[12px] leading-[27px] font-semibold">Edit</span>
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                    ✕
                  </label>
                  <form onSubmit={upload}>
                    <h3 className="text-lg font-bold text-left">Choose file</h3>
                    <input type="file" name="picture" accept="image/png, image/jpeg, image/jpg" className="flex justify-start mb-7" />
                    {alertSuccess ? (
                      <div className="bg-green-200 border-2 rounded border-green-500 flex justify-center items-center py-3 mb-5">
                        <span>Upload success</span>
                      </div>
                    ) : (
                      false
                    )}
                    {alertSize ? (
                      <div className="bg-red-200 border-2 rounded border-red-500 flex justify-center items-center py-3 mb-5">
                        <span>Cannot more than 2MB</span>
                      </div>
                    ) : (
                      false
                    )}
                    <button type="submit" className="btn">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <p className="text-[24px] text-[#4D4B57] leading-[32px] mb-[10px]">{bio.firstName + " " + bio.lastName}</p>
                <p className="text-[#7A7886] text-[16px] leading-[27px]">{bio.phoneNumber}</p>
              </div>
            </div>
            <div>
              <Link href="/personal-info" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Personal Information</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/change-password" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Change Password</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/change-pin" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px] mb-[20px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Change PIN</p>
                  <Image src={arrowRight} alt="arrow-right" className="" />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/login" className="">
                <div className="px-[20px] py-[18px] flex border-1 bg-[#E5E8ED] items-center rounded-[10px]">
                  <p className="flex-1 text-[#4D4B57] text-[16px] font-bold leading-[28px]">Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(Profile);
