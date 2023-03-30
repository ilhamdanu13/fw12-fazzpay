/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Sidebar from './components/sidebar';
import withAuth from './middleware/private-route';
import http from '../helper/http';
import lockInput from '../assets/lock-input.png';
import Navbar from './components/navbar';
import Footer from './components/footer';

YupPassword(Yup);

const passwordScheme = Yup.object().shape({
  newPassword: Yup.string().password().min(8, 'Minimum length 8').minLowercase(1, 'At least 1 lowercase')
    .minUppercase(1, 'At least 1 uppercase')
    .minSymbols(1, 'At least 1 symbol')
    .minNumbers(1, 'At least 1 number')
    .required('Required'),
  confirmPassword: Yup.string()
    .password()
    .min(8, 'Minimum length 8')
    .minLowercase(1, 'At least 1 lowercase')
    .minUppercase(1, 'At least 1 uppercase')
    .minSymbols(1, 'At least 1 symbol')
    .minNumbers(1, 'At least 1 number')
    .required('Required'),
});

const ChangePassword = () => {
  const token = useSelector((state) => state.auth.token);
  const [errMessage, setErrMessage] = useState('');
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertCurrent, setAlertCurrent] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const router = useRouter();

  const resetPassword = async (value) => {
    const { currentPassword } = value;
    const { newPassword } = value;
    const { confirmPassword } = value;

    if (newPassword !== confirmPassword) {
      setAlertCurrent(false);
      setAlertPassword(true);
    } else {
      try {
        const data = await http(token).post('profile/change-password', {
          ...value,
        });
        setAlertCurrent(false);
        setAlertPassword(false);
        setAlertSuccess(true);
        setTimeout(() => {
          router.reload();
        }, 3000);
      } catch (err) {
        setErrMessage(err.message);
        setAlertPassword(false);
        setAlertCurrent(true);
      }
    }
  };

  const handleShowFirst = () => {
    setShowFirst(!showFirst);
  };
  const handleShowSecond = () => {
    setShowSecond(!showSecond);
  };
  const handleShowThird = () => {
    setShowThird(!showThird);
  };
  return (
    <div className="font-nunitoSans bg-[#f5f1f3]">
      <Navbar />
      <div className="pt-[40px] lg:flex">
        <Sidebar />
        <div className="w-full pl-3 lg:pl-5 pr-3 pb-5 lg:mb-[35px] lg:pr-[150px] lg:pl-0 lg:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px] pb-[63px]">
            <div className="mb-[104px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Change Password</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] lg:w-[342px]">You must enter your current password and then type your new password twice.</p>
            </div>
            <Formik
              initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={passwordScheme}
              onSubmit={resetPassword}
            >
              {({ errors, touched }) => (
                <Form className="lg:px-[140px]">
                  <div className="mb-[63px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="currentPassword" type={showFirst ? 'text' : 'Password'} placeholder="Current password" className="focus:outline-none w-full " />
                      <div onClick={handleShowFirst} onKeyDown={handleShowFirst} className="absolute right-12 lg:right-80">
                        {showFirst ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr />
                  </div>
                  <div className="mb-[63px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="newPassword" type={showSecond ? 'text' : 'Password'} placeholder="New password" className="focus:outline-none w-full " />
                      <div onClick={handleShowSecond} onKeyDown={handleShowSecond} className="absolute right-12 lg:right-80">
                        {showSecond ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr />
                    {errors.newPassword && touched.newPassword ? <div className="text-red-500 text-sm">{errors.newPassword}</div> : null}
                  </div>
                  <div className="mb-[70px]">
                    <label className="flex text-[#A9A9A9CC] text-[16px] leading-[24px] mb-[11px]">
                      <Image src={lockInput} alt="lock-input" className="mr-[20px]" />
                      <Field name="confirmPassword" type={showThird ? 'text' : 'Password'} placeholder="Repeat new password" className="focus:outline-none w-full " />
                      <div onClick={handleShowThird} onKeyDown={handleShowThird} className="absolute right-12 lg:right-80">
                        {showThird ? <BsEyeSlash className="w-[25px] h-[25px]" /> : <BsEye className="w-[25px] h-[25px]" />}
                      </div>
                    </label>
                    <hr />
                    {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm">{errors.confirmPassword}</div> : null}
                  </div>
                  {alertPassword ? (
                    <div className="bg-yellow-200 border-2 border-yellow-500 mb-5 flex justify-center items-center py-3">
                      <span className="text-center">New password and confirm new password does not match</span>
                    </div>
                  ) : (
                    false
                  )}
                  {alertCurrent ? (
                    <div className="bg-red-200 border-2 border-red-500 mb-5 flex justify-center items-center py-3 rounded">
                      <span className="text-center">Current password not match</span>
                    </div>
                  ) : (
                    false
                  )}
                  {alertSuccess ? (
                    <div className="bg-green-200 border-2 border-green-500 mb-5 flex justify-center items-center py-3 rounded">
                      <span className="text-center">Change password success</span>
                    </div>
                  ) : (
                    false
                  )}
                  <div>
                    <button type="submit" className="border-1 bg-[#DADADA] py-[16px] w-full rounded-[12px] text-[#88888F] text-[18px] leading-[24px] font-bold hover:bg-[#60bad7] hover:text-white duration-200">
                      Change Password
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

export default withAuth(ChangePassword);
