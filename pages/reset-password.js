import Image from "next/image";
import mailInput from "../assets/mail.png";
import peak from "../assets/peak.png";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);
import Link from "next/link";
import { useState } from "react";
import { forgotPasswordAction as forgotAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const resetPasswordScheme = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ResetPassword = () => {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const reset = async (value) => {
    const cb = () => {
      setAlertEmail(true);
      setTimeout(() => {
        router.push("create-new-password");
      }, 3000);
    };
    try {
      const results = await dispatch(forgotAction({ ...value, cb }));
      cb();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:flex font-nunitoSans py-5 lg:py-0">
      <div className="hidden lg:block lg:w-3/5 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px]">
        <div className="pl-[110px]">
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
      <div className="">
        <div className="lg:hidden pl-3 pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
        <div className="lg:pt-[121px] pl-3 lg:pl-[50px] mb-[63px] pr-3 lg:pr-[50px]">
          <h2 className="lg:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
          <p className="lg:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
        </div>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={reset}
          validationSchema={resetPasswordScheme}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="pl-3 lg:pl-[50px] pr-3 lg:pr-[50px] mb-[90px]">
                <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={mailInput} alt="mail-input" className="mr-[20px]" />
                  <Field name="email" type="email" placeholder="Enter your e-mail" className="focus:outline-none w-full " />
                </label>
                <hr className="text-[#A9A9A999]" />
                {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              {alertEmail ? (
                <div className="px-[50px] mb-5">
                  <div className="bg-yellow-200 border-2 border-yellow-500 rounded flex justify-center items-center py-3">
                    <span>Unavailable</span>
                  </div>
                </div>
              ) : (
                false
              )}
              <div className="pl-3 lg:pl-[50px] pr-3 lg:pr-[50px]">
                <div className="">
                  <button type="submit" className="border-1 bg-[#DADADA] text-[#88888F] text-[18px] py-[16px] lg:px-[240px] flex justify-center rounded-[12px] w-full">
                    Confirm
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
