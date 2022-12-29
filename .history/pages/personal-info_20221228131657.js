import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import plus from "../assets/plus.png";
import userBlue from "../assets/user-blue.png";
import logOut from "../assets/log-out.png";
import men from "../assets/man.png";
import gridBlack from "../assets/grid-black.png";
import arrowUp from "../assets/arrow-up.png";
import edit2 from "../assets/edit.png";
import arrowRight from "../assets/arrow-right2.png";

function PersonalInfo() {
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = useState({});
  console.log(bio);
  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("https://68xkph-8888.preview.csb.app/profile");
    return data;
  };
  return (
    <div className="font-nunitoSans">
      <Navbar />
      <div className="bg-[#f5f1f3] pt-[40px] md:flex">
        <div className="md:mr-[20px] flex flex-col md:mb-[35px]">
          <div className="pl-5 pr-3 md:pr-0 md:pl-[150px] md:mr-[20px] md:h-[690px] md:mb-[35px] mb-5">
            <div className="block border-1 bg-white rounded-[25px] md:flex flex-col md:h-[710px]">
              <div className="flex-1">
                <div className="flex items-center pr-[96px] pt-5 md:pt-[52px] pl-[38px]">
                  <Image src={gridBlack} alt="grid" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/home" className="text-[#3A3D42CC] hover:text-[#60bad7]">
                    Dashboard
                  </Link>
                </div>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                  <Image src={arrowUp} alt="arrowUp" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/search-receiver" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                    Transfer
                  </Link>
                </button>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] pl-[38px]">
                  <Image src={plus} alt="plus" className=" md:mr-[15px] w-[28px] h-[28px]" />
                  <Link href="top-up" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px] w-[100px]">
                    Top Up
                  </Link>
                </button>
                <button className="flex items-center pr-[96px] pt-5 md:pt-[64px] ">
                  <hr className="border-r-4 border-[#60bad7] h-[35px] mr-[33px]" />
                  <Image src={userBlue} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/profile" className="text-[#60bad7] text-[18px] leading-[31px]">
                    Profile
                  </Link>
                </button>
              </div>
              <div className="pb-[50px]">
                <button className="flex items-center pr-[96px] pt-[64px] pl-[38px]">
                  <Image src={logOut} alt="user" className="mr-[23px] w-[28px] h-[28px]" />
                  <Link href="/login" className="text-[#3A3D42CC] hover:text-[#60bad7] text-[18px] leading-[31px]">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pl-5 pr-3 pb-5 md:mb-[35px] md:pr-[150px] md:pl-0 md:pb-0">
          <div className="border-1 bg-white p-[30px] rounded-[25px]">
            <div className="mb-[40px]">
              <p className="text-[#3A3D42] text-[18px] leading-[25px] font-bold mb-[25px]">Personal Information</p>
              <p className="text-[#7A7886] text-[16px] leading-[28px] w-[342px]">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
            </div>
            <div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">First Name</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">{bio.firstName}</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Last Name</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">Danu</p>
                </div>
              </div>
              <div className="flex mb-[20px] border-1 shadow-md p-[15px] rounded-[10px]">
                <div className="flex-1">
                  <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Verified E-mail</p>
                  <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">pewdiepie1@gmail.com</p>
                </div>
              </div>
              <div className="flex border-1 shadow-md p-[15px] rounded-[10px] mb-[55px]">
                <div className="flex-1">
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-[#7A7886] text-[16px] leading-[21px] mb-[10px]">Phone Number</p>
                      <p className="text-[#514F5B] text-[22px] leading-[30px] font-bold">+62 813-9387-7946</p>
                    </div>
                    <Link href="/update-phone-number" className="text-[16px] text-[#60bad7] pr-[35px] flex items-center">
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="pl-5 pr-3 md:pl-[150px] md:pr-[150px] md:py-[20px] bg-[#7a4c75]">
        <div className="text-[#EFEFEFE5] text-[16px] leading-[28px] md:flex">
          <div className="flex-1 mb-2 md:mb-0">2020 CluePay. All right reserved.</div>
          <div className="font-semibold flex flex-col md:block">
            <span className="mr-[40px] mb-1 md:mb-0">+62 5637 8882 9901</span>
            <span>contact@cluepay.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PersonalInfo;
