import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import http from "../helper/http";
import { useSelector } from "react-redux";
import { useState } from "react";
YupPassword(Yup);

const pinScheme = Yup.object().shape({
  newPin: Yup.string().minNumbers(6, "Should 6 digits").max(6, "Should 6 digits").required("Required"),
});
const ChangePin = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const updatePin = async (value) => {
    const newPin = value.newPin;

    try {
      await http(token).post("/profile/change-pin", value);
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
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
        <div className="w-full md:mb-[35px] pl-5 pr-3 pb-5 md:pr-[150px]">
          <div className="border-1 bg-white p-[30px] pb-[220px] rounded-[25px]">
            <div className="mb-[50px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Change PIN</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">Enter your 6 digits CluePay PIN below to continue to the next steps.</p>
            </div>
            {alertSuccess ? (
              <div className="bg-green-200 border-2 border-green-500 py-3 flex justify-center items-center mb-7 rounded">
                <span>Pin updated!</span>
              </div>
            ) : null}
            <Formik
              initialValues={{
                newPin: "",
              }}
              onSubmit={updatePin}
              validationSchema={pinScheme}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col justify-center items-center mb-7">
                    <Field name="newPin" className="py-3 border-b-2 text-[48px] leading-[50px] tracking-widest focus:outline-none w-1/3 px-3" />
                    {errors.newPin && touched.newPin ? <div className="text-red-500 text-sm">{errors.newPin}</div> : null}
                  </div>

                  <div>
                    <div className="px-[80px]">
                      <button type="submit" className="border-1 bg-[#DADADA] py-[16px] text-[#88888F] text-[18px] leading-[24px] font-bold w-full rounded-[12px] hover:bg-[#60bad7] hover:text-white hover:font-bold">
                        Continue
                      </button>
                    </div>
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
};

export default ChangePin;
