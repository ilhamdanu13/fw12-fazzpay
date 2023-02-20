/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import http from '../helper/http';
import withAuth from './middleware/private-route';
import phone from '../assets/phone2.png';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

const phoneRegExpID = /^(^08)(\d{8,10})$/;
const phoneScheme = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneRegExpID, 'Invalid phone number'),
});

YupPassword(Yup);
function UpdatePhoneNumber() {
  const token = useSelector((state) => state.auth.token);
  const [alertPhone, setAlertPhone] = useState(false);

  const [bio, setBio] = useState({});

  const getBio = async () => {
    const { data } = await http(token).get('https://68xkph-8888.preview.csb.app/profile');
    return data;
  };

  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const updatePhoneNumber = async (value) => {
    const { phoneNumber } = value;

    try {
      await http(token).post('/profile/phone-number', value);
      setAlertPhone(true);
      setTimeout(() => {
        setAlertPhone(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-nunitoSans bg-[#f5f1f3]">
      <Navbar />
      <div className="pt-[40px] lg:flex">
        <Sidebar />
        <div className="w-full pl-3 lg:pl-5 pr-3 pb-5  lg:mb-[35px] lg:pr-[150px] lg:pb-0 ">
          <div className="border-1 bg-white p-[30px] rounded-[25px] pb-[230px]">
            <div className="mb-[123px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Edit Phone Number</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] lg:w-[342px]">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
            </div>
            <Formik
              initialValues={{
                phoneNumber: '',
              }}
              validationSchema={phoneScheme}
              onSubmit={updatePhoneNumber}
            >
              {({ errors, touched }) => (
                <Form className="lg:px-[140px]">
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
                    <button type="submit" className="border-1 bg-[#DADADA] py-[16px] w-full rounded-[12px] text-[#88888F] text-[18px] leading-[24px] font-bold hover:bg-[#60bad7] hover:text-white duration-200">
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
