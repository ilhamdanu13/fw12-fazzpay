import Image from "next/image";
import Navbar from "./components/navbar";
import phone from "../assets/phone2.png";
import withAuth from "./middleware/private-route";
import { useSelector } from "react-redux";
import http from "../helper/http";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const phoneScheme = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number"),
});

YupPassword(Yup);
function UpdatePhoneNumber() {
  const token = useSelector((state) => state.auth.token);
  const [alertPhone, setAlertPhone] = useState(false);

  const [bio, setBio] = useState({});
  console.log(bio);
  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile");
    return data;
  };

  const updatePhoneNumber = async (value) => {
    const phoneNumber = value.phoneNumber;

    try {
      await http(token).post("/profile/phone-number", value);
      setAlertPhone(true);
      setTimeout(() => {
        setAlertPhone(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <Sidebar />
        <div className="w-full pl-5 pr-3 pb-5  md:mb-[35px] md:pr-[150px] md:pb-0 md:pl-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px] pb-[230px]">
            <div className="mb-[123px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Edit Phone Number</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
            </div>
            <Formik
              initialValues={{
                phoneNumber: "",
              }}
              validationSchema={phoneScheme}
              onSubmit={updatePhoneNumber}
            >
              {({ errors, touched }) => (
                <Form className="md:px-[140px]">
                  <div className="mb-[63px]">
                    <label className="flex text-[#3A3D42] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={phone} alt="phone" className="mr-[20px]" />
                      <span className="text-[#3A3D42] text-[16px] font-semibold leading-[23px] mr-[15px]">+62</span>
                      <Field defaultValue={bio.phoneNumber} placeholder={bio.phoneNumber} name="phoneNumber" className="focus:outline-none w-full focus:font-semibold" />
                    </label>
                    <hr />
                    {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-sm">{errors.phoneNumber}</div> : null}
                  </div>
                  {alertPhone ? (
                    <div className="bg-green-200 border-2 border-green-500 py-3 mb-5 flex justify-center items-center rounded">
                      <span>Phone number updated</span>
                    </div>
                  ) : (
                    false
                  )}
                  <div>
                    <button type="submit" className="border-1 bg-[#DADADA] py-[16px] px-[110px] md:px-[125px] rounded-[12px] text-[#88888F] text-[18px] leading-[24px] font-bold">
                      Edit Phone Number
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(UpdatePhoneNumber);
