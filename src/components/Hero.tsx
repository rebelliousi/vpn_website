import image from "../assets/img/Mask group.png";
import image2 from "../assets/img/Mask group (1).png";
import icon from "../assets/img/Vector.png";
import advert from "../assets/img/Logonetflix.png";
import advert2 from "../assets/img/BBC-Logo-1.png";
import advert3 from "../assets/img/Nike-Logo.png";
const Hero: React.FC = () => {
  return (
    <div className="p-5 container mx-auto flex flex-col item-center justify-center font-roboto">
      <div className="p-2 sm:w-[530px] sm:h-[207px]">
        <h1 className="font-roboto  text-center text-[40px] leading-tight text-[#00204E] font-[700]">
          Browse the web anonymously, safe and secure{" "}
        </h1>
      </div>
      <div className="p-2 sm:w-[220px] sm:h-[58px]">
        <p className=" text-center text-[21px] text-[#383838] leading-tight">
          Protect your online <br /> footprint with Shield vpn
        </p>
      </div>
      <div className=" mt-4 flex items-center justify-center">
        <button className=" text-[18px] text-white bg-[#0166F6] rounded-full px-8 py-3">
          Get shield vpn{" "}
        </button>
      </div>

      <div className="p-5 relative mt-20 ">
        <div className="absolute  bg-[#011B411A] rounded-lg  w-[120px] h-[120px] right-[-4px] top-[130px]"></div>
        <img className="absolute w-[270px] h-[260px]" src={image} alt="" />

        <img
          className="absolute w-[200px] right-[1px] top-[150px] transition transform hover:translate-y-[-30px] z-1"
          src={image2}
          alt=""
        />
      </div>
      <div className=" p-6 w-[400px] flex flex-col items-start justify-center space-y-6 mt-[350px] ">
        <div className="flex items-center justify-center space-x-2">
          <img className="w-7" src={icon} alt="" />
          <p className="text-[#00204E] text-[18px] font-[400]">
            Safeguard your browsing experience
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img className="w-7" src={icon} alt="" />
          <p className="text-[#00204E] text-[18px] font-[400]">
            {" "}
            Stay safe with 100% digital anonymity
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img className="w-7" src={icon} alt="" />
          <p className="text-[#00204E] text-[18px] font-[400]">
            {" "}
            Protect up to 7 devices simultaneously
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="font-[700] text-[20px] text-[#00204E] pt-5">
          Trusted & Recommended by:{" "}
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-5">
          <img  className="w-28" src={advert} alt="" />
          <img   className="w-28"src={advert2} alt="" />
          <img  className="w-28" src={advert3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
