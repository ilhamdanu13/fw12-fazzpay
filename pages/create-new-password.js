import Image from "next/image";
import previewProduct from "../assets/preview product2.png";
import mailInput from "../assets/mail.png";
import lockInput from "../assets/lock-input.png";
import person from "../assets/person.png";
import peak from "../assets/peak.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useState } from "react";

YupPassword(Yup);

const createPasswordScheme = Yup.object().shape({
  newPassword: Yup.string().password().min(8, "Minimum length 8").minLowercase(1, "At least 1 lowercase").minUppercase(1, "At least 1 uppercase").minSymbols(1, "At least 1 symbol").minNumbers(1, "At least 1 number").required("Required"),
  confirmNewPassword: Yup.string()
    .password()
    .min(8, "Minimum length 8")
    .minLowercase(1, "At least 1 lowercase")
    .minUppercase(1, "At least 1 uppercase")
    .minSymbols(1, "At least 1 symbol")
    .minNumbers(1, "At least 1 number")
    .required("Required"),
});

const CreatePassword = () => {
  const dispatch = useDispatch();
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);

  const router = useRouter();

  // Create new password
  const createPassword = () => {
    setAlertPassword(true);
    setTimeout(() => {
      router.push("signup");
    }, 3000);
  };
  const handleShowTop = () => {
    setShowTop(!showTop);
  };
  const handleShowBottom = () => {
    setShowBottom(!showBottom);
  };
  return (
    <div className="md:flex font-nunitoSans py-5 md:py-0">
      <div className="hidden md:block md:w-3/5 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px] pr-[50px] md:pr-0">
        <div className="pl-[110px] mb-[10px]">
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
      <div>
        <div className="md:hidden pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
        <div className="md:pt-[121px] pl-[50px] mb-[63px] pr-[50px] md:pr-0">
          <h2 className="md:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="md:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">Transfering money is eassier than ever, you can access CluePay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        </div>
        <div>
          <Formik
            initialValues={{
              newPassword: "",
              confirmNewPassword: "",
            }}
            validationSchema={createPasswordScheme}
            onSubmit={createPassword}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="pl-[50px] pr-[50px] md:pr-0 mb-[40px]">
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="newPassword" type={showTop ? "text" : "password"} placeholder="Create new password" className="focus:outline-none w-full " />
                      <div onClick={handleShowTop} className="absolute right-[80px]">
                        {showTop ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.newPassword && touched.newPassword ? <div className="text-red-500 text-sm">{errors.newPassword}</div> : null}
                  </div>
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="confirmNewPassword" type={showBottom ? "text" : "password"} placeholder="Create new password" className="focus:outline-none w-full " />
                      <div onClick={handleShowBottom} className="absolute right-[80px]">
                        {showBottom ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.confirmNewPassword && touched.confirmNewPassword ? <div className="text-red-500 text-sm">{errors.confirmNewPassword}</div> : null}
                  </div>
                  {alertPassword ? (
                    <div className="bg-yellow-200 border-2 rounded border-yellow-500 mb-5 py-3 flex justify-center items-center">
                      <span className="">Unavailable from server, please register new account!</span>
                    </div>
                  ) : (
                    false
                  )}
                </div>

                <div className="mb-[40px] pl-[50px]">
                  <button type="submit" className=" bg-[#DADADA] text-[#88888F] text-[18px] flex justify-center py-[16px] rounded-[12px] w-full hover:bg-[#60bad7] hover:text-white hover:font-bold">
                    Reset password
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="pl-[50px] pr-[50px] md:pr-0 pb-[51px]">
          <div className="flex justify-center">
            <p className="text-[16px] text-[#3A3D42CC] font-bold leading-[26px] mr-2">Already have an account? Let’s</p>
            <Link href="/login" className="text-[16px] text-[#60bad7] leading-[26px] font-bold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
