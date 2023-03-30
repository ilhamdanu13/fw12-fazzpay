/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useSelector } from 'react-redux';
import React, { useState, useRef } from 'react';
import http from '../helper/http';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

YupPassword(Yup);

const pinScheme = Yup.object().shape({
  newPin: Yup.string().minNumbers(6, 'Should 6 digits').max(6, 'Should 6 digits').required('Required'),
});
const ChangePin = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [pin, setPin] = useState([]);

  const updatePin = async (e) => {
    e.preventDefault();
    try {
      await http(token).post('/profile/change-pin', { pin });
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  const changeInput = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    const pinInput = {
      1: input1,
      2: input2,
      3: input3,
      4: input4,
      5: input5,
      6: input6,
    };
    const currentInput = Number(e.target.name);
    if (e.target.value.length) {
      pinInput[currentInput + 1]?.current?.focus();
    } else {
      pinInput[currentInput - 1]?.current?.focus();
      if (currentInput < 6) {
        for (let i = currentInput; i <= 6; i++) {
          pinInput[i].current.value = '';
        }
      }
    }
    let currentPin = '';
    for (let i = 0; i <= 6; i++) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      currentPin += pinInput[i]?.current?.value;
      setPin(currentPin);
    }
  };
  console.log(pin);
  return (
    <div className="font-nunitoSans bg-[#f5f1f3]">
      <Navbar />
      <div className="pt-[40px] lg:flex">
        <Sidebar />
        <div className="w-full lg:mb-[35px] pl-3 lg:pl-5 pr-3 pb-5 lg:pr-[150px]">
          <div className="border-1 bg-white p-[30px] pb-[220px] rounded-[25px]">
            <div className="mb-[50px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Change PIN</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] lg:w-[342px]">Enter your 6 digits CluePay PIN below to continue to the next steps.</p>
            </div>
            <form onSubmit={updatePin}>
              <div className="flex gap-3">
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input1} name="1" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input2} name="2" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input3} name="3" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input4} name="4" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input5} name="5" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
                <div className="border-2 inline-block border-black rounded-[8px] overflow-hidden w-[60px] h-[60px]">
                  <input type="number" ref={input6} name="6" onChange={changeInput} className="outline-none no-arrows px-[3px] w-full h-full text-center" />
                </div>
              </div>
              <div className="px-[80px]">
                <button type="submit" className="border-1 bg-[#DADADA] py-[16px] text-[#88888F] text-[18px] leading-[24px] font-bold w-full rounded-[12px] hover:bg-[#60bad7] hover:text-white hover:font-bold duration-200">
                  Continue
                </button>
              </div>
            </form>
            {alertSuccess ? (
              <div className="bg-green-200 border-2 border-green-500 py-3 flex justify-center items-center mb-7 rounded">
                <span>Pin updated!</span>
              </div>
            ) : null}
            <Formik
              initialValues={{
                newPin: '',
              }}
              onSubmit={updatePin}
              validationSchema={pinScheme}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col justify-center items-center mb-7">
                    <Field name="newPin" className="py-3 border-b-2 text-[48px] leading-[50px] tracking-widest focus:outline-none w-[200px] lg:w-1/3 px-3" />
                    {errors.newPin && touched.newPin ? <div className="text-red-500 text-sm">{errors.newPin}</div> : null}
                  </div>

                  <div>
                    <div className="px-[80px]">
                      <button type="submit" className="border-1 bg-[#DADADA] py-[16px] text-[#88888F] text-[18px] leading-[24px] font-bold w-full rounded-[12px] hover:bg-[#60bad7] hover:text-white hover:font-bold duration-200">
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
}

export default ChangePin;
