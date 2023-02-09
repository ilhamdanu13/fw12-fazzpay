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
import { registerAction } from "../redux/actions/auth";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useState } from "react";

YupPassword(Yup);

const SignupScheme = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().password().min(8, "Minimum length 8").minLowercase(1, "At least 1 lowercase").minUppercase(1, "At least 1 uppercase").minSymbols(1, "At least 1 symbol").minNumbers(1, "At least 1 number").required("Required"),
});

function SignUp() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const router = useRouter();

  // Register
  const register = async (value) => {
    const cb = () => {
      setAlertEmail(false);
      setAlertSuccess(true);
      setTimeout(() => {}, 3000);
      router.push("login");
    };
    try {
      const results = await dispatch(
        registerAction({
          ...value,
          cb,
        })
      );
      if (results.payload.startsWith("duplicate")) {
        setAlertSuccess(false);
        setAlertEmail(true);
        return;
      }
      cb();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="lg:flex font-nunitoSans py-5 lg:py-0">
      <div className="hidden lg:block lg:w-3/5 bg-no-repeat bg-cover bg-[#7a4c75] pt-[50px] pb-[100px] pr-[50px] lg:pr-0">
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
        <div className="lg:hidden pl-3 lg:pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
        <div className="lg:pt-[121px] pl-3 lg:pl-[50px] mb-[63px] pl-3 lg:pr-[50px]">
          <h2 className="lg:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="lg:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">Transfering money is eassier than ever, you can access CluePay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        </div>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupScheme}
            onSubmit={register}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="pl-3 lg:pl-[50px] pr-3 lg:pr-[50px] mb-[40px]" id="form">
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={person} alt="person" className="mr-[20px]" />
                      <Field name="firstName" type="text" placeholder="Enter your first name" className="focus:outline-none w-full " />
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.firstName && touched.firstName ? <div className="text-red-500 text-sm">{errors.firstName}</div> : null}
                  </div>
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={person} alt="person" className="mr-[20px]" />
                      <Field name="lastName" type="text" placeholder="Enter your last name" className="focus:outline-none w-full " />
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.lastName && touched.lastName ? <div className="text-red-500 text-sm">{errors.lastName}</div> : null}
                  </div>
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="email" type="email" placeholder="Enter your e-mail" className="focus:outline-none w-full " />
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
                  </div>
                  <div className="mb-[44px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="password" type={show ? "text" : "password"} placeholder="Create your password" className="focus:outline-none w-full " />
                      <div onClick={handleShow} className="absolute right-[20px]">
                        {show ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr className="text-[#A9A9A999]" />
                    {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                  </div>
                  {alertSuccess ? (
                    <div className="bg-green-200 border-2 rounded border-green-500 mb-5 py-3 flex justify-center items-center">
                      <span className="">Register success</span>
                    </div>
                  ) : (
                    false
                  )}
                  {alertEmail ? (
                    <div className="bg-red-200 border-2 rounded border-red-500 mb-5 py-3 flex justify-center items-center">
                      <span className="">Email already used!</span>
                    </div>
                  ) : (
                    false
                  )}
                </div>

                <div className="mb-[40px] pl-3 lg:pl-[50px] pr-3 lg:pr-0">
                  <button type="submit" className=" bg-[#DADADA] text-[#88888F] text-[18px] flex justify-center py-[16px] rounded-[12px] w-full hover:bg-[#60bad7] hover:text-white hover:font-bold">
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="pl-3 lg:pl-[50px] pr-3 lg:pr-[50px] pb-[51px] text-center">
          <div className="flex flex-col lg:flex-row justify-center">
            <p className="text-[16px] text-[#3A3D42CC] font-bold leading-[26px] mr-2">Already have an account? Let’s</p>
            <Link href="/login" className="text-[16px] text-[#60bad7] leading-[26px] font-bold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
