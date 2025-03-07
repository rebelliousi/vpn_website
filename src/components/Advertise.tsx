import image from "../assets/img/image 2.png";
import image2 from "../assets/img/image 5.png";
import image3 from "../assets/img/image 7.png";
const Advertise: React.FC = () => {
  return (
    <div className="p-5 container mx-auto font-roboto flex flex-col items-center justify-center">
      <div className="relative p-4 flex flex-col items-start justify-center">
        <img className="rounded-lg relative z-10" src={image} alt="" />
        <div className="absolute inset-0 bg-[#E7D9D033]  w-[400px] top-[30px] left-5 h-[360px] rounded-lg z-0"></div>
        <h1 className="text-left text-[26px] text-[#00204E] font-[500] mt-10 leading-tight">
          Protect your online footprint with Shield VPN
        </h1>
        <p className="text-left text-[#383838] text-[16px] mt-5">
          Every account created, email sent, image posted, or website visited
          adds to a person's online footprint. Why let anyone know where you are
          surfing the web from? Connect to any of the locations on Shield VPN
          and keep your IP hidden from people and cyber attackers snooping
          around and monitoring your activities online.
        </p>
      </div>

      <div className="relative p-4 flex flex-col items-start justify-center mt-5">
        <img
          className="rounded-lg relative z-10 left-5 bottom-5"
          src={image3}
          alt=""
        />
        <div className="absolute inset-0 bg-[#0133661A] w-[400px] top-[30px] right-5 h-[360px] rounded-lg z-0"></div>
        <h1 className="text-left text-[26px] text-[#00204E] font-[500] mt-10 leading-tight">
          Stream content from anywhere in the world
        </h1>
        <p className="text-left text-[#383838] text-[16px] mt-5">
          Your favorite videos, movies, TV shows, or other media content that’s
          available on streaming platforms like Netflix, HBO Max, even Amazon
          Prime might vary from region to region. Who says you can't get access
          to those contents? With Shield VPN, you have can stream your favorite
          media content from anywhere in the world with no buffering.
        </p>
      </div>

      <div className="relative p-4 flex flex-col items-start justify-center">
        <img className="rounded-lg relative z-10" src={image2} alt="" />
        <div className="absolute inset-0 bg-[#97979726]  w-[400px] top-[30px] left-5 h-[360px] rounded-lg z-0"></div>
        <h1 className="text-left text-[28px] text-[#00204E] font-[500] mt-10 leading-tight">
          Enjoy high-speed and reliable internet connections
        </h1>
        <p className="text-left text-[#383838] text-[16px] mt-5">
          No more buffering on your favorite TV shows or music streaming
          platforms. You can now browse the internet with the speed of light
          when you use Shield VPN today and not miss the best moments on your
          streaming platforms. Cool right?
        </p>
      </div>
    </div>
  );
};
export default Advertise;
