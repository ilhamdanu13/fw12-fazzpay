import React from 'react';

function Footer() {
  return (
    <footer className="pl-5 pr-3 md:pl-[150px] md:pr-[150px] md:py-[20px] bg-[#7a4c75]">
      <div className="text-[#EFEFEFE5] text-[16px] leading-[28px] md:flex">
        <div className="flex-1 mb-2 md:mb-0">2020 CluePay. All right reserved.</div>
        <div className="font-semibold flex flex-col md:block">
          <span className="mr-[40px] mb-1 md:mb-0">+62 5637 8882 9901</span>
          <span>contact@cluepay.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
