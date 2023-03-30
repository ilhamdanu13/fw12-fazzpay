/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { loginAction } from '../redux/actions/auth';
import peak from '../assets/peak.png';
import lockInput from '../assets/lock-input.png';
import mailInput from '../assets/mail.png';

YupPassword(Yup);

const loginScheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const [alertWrong, setAlertWrong] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const cb = () => {
    setAlertWrong(false);
    setAlertSuccess(true);
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  };
  const login = async (value) => {
    try {
      const results = await dispatch(
        loginAction({
          ...value,
          cb,
        }),
      );

      if (results.payload.startsWith('Wrong')) {
        setAlertWrong(true);
        return;
      }
      cb();
    } catch (error) {
      console.lo(error);
    }
  };
  const handleShow = () => {
    setShow(!show);
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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={login}
        validationSchema={loginScheme}
      >
        {({ errors, touched }) => (
          <div>
            <div className="lg:hidden pl-3 lg:pl-[50px] text-[32px] font-bold text-[#60bad7] leading-[50px]">CluePay</div>
            <div className="lg:pt-[121px] pl-3 lg:pl-[50px] mb-[63px] pr-3 lg:pr-[50px] lg:pr-0">
              <h2 className="lg:w-[400px] text-[#3A3D42] text-[24px] leading-[42px] font-bold">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
              <p className="lg:w-[420px] text-[#3A3D4299] text-[16px] leading-[30px]">Transfering money is eassier than ever, you can access CluePay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            </div>
            <Form className="pl-3 pr-3 lg:pl-[50px] lg:pr-[50px] mb-[40px]">
              <div className="mb-[73px]">
                <div className="flex items-center text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={mailInput} alt="mail-input" className="mr-[20px]" />
                  <Field name="email" type="email" placeholder="Enter your e-mail" className="focus:outline-none w-full " />
                </div>
                <hr className="text-[#A9A9A999]" />
                {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              <div className="mb-[20px]">
                <div className="flex items-center text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                  <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                  <Field name="password" type={show ? 'text' : 'password'} placeholder="Enter your password" className="focus:outline-none w-full " />
                  <label onClick={handleShow} onKeyDown={handleShow} className="absolute right-5 lg:right-24">
                    {show ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                  </label>
                </div>
                <hr className="text-[#A9A9A999]" />
                {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
              </div>
              <div className="text-right mb-5">
                <Link href="/reset-password" className="text-[15px] font-semibold leading-[24px] text-[#3A3D42CC]">
                  Forgot password?
                </Link>
              </div>
              {alertSuccess ? (
                <div className="mb-5 bg-green-200 border-2 border-green-500 rounded">
                  <div className="py-3 flex justify-center items-center">Login success</div>
                </div>
              ) : (
                false
              )}
              {alertWrong ? (
                <div className="mb-5 bg-red-200 border-2 border-red-500 rounded">
                  <div className="py-3 flex justify-center items-center">Wrong email or password</div>
                </div>
              ) : (
                false
              )}
              <div className="">
                <button type="submit" className="mb-[40px] bg-[#DADADA] py-[16px] w-full rounded-[12px] text-[#88888F] text-[18px] hover:bg-[#60bad7] hover:text-white hover:font-bold">
                  Login
                </button>
              </div>
            </Form>
            <div className="pl-3 lg:pl-[50px] pr-3 lg:pr-[50px] pb-[146px] text-center">
              <div className="flex flex-col lg:flex-row justify-center">
                <p className="text-[16px] text-[#3A3D42CC] font-bold leading-[26px] mr-2">Don’t have an account? Let’s</p>
                <Link href="/signup" className="text-[16px] text-[#60bad7] leading-[26px] font-bold">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Login;
