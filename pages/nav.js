import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="h-screen bg-gray-50 md:hidden">
      <header>
        <div className="relative z-20 border-b bg-white">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <a href="#">
                  <p className="w-32 text-[29px] font-bold leading-[40px] text-[#60bad7]">CluePay</p>
                </a>
              </div>

              <div className="flex items-center justify-end border-l lg:border-l-0">
                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                <label for="hamburger" className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden">
                  <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                  <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                </label>

                <div className="fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] border-r bg-white shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:border-r-0 lg:shadow-none">
                  <div className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                    <ul className="space-y-8 px-6 pt-32 text-gray-700 md:px-12 lg:flex lg:space-y-0 lg:space-x-12 lg:pt-0">
                      <li>
                        <a href="#" className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100">
                          <span className="relative text-cyan-800">Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative group-hover:text-cyan-800">Services</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative group-hover:text-cyan-800">Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative group-hover:text-cyan-800">About us</span>
                        </a>
                      </li>
                    </ul>

                    <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      <a href="#" className="block rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 text-center text-white">
                        {" "}
                        Get started{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
