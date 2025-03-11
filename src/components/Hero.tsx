import { features, heroText, images, trustedByCompanies } from "../types/Hero";

const Hero: React.FC = () => {
  return (
    <div className="p-5 container mx-auto flex flex-col item-center justify-center font-roboto">
      <div>
        
      </div>
      <div className="p-2 sm:w-[530px] sm:h-[207px] l">
        <h1 className="font-roboto  text-center text-[40px] leading-tight text-[#00204E] font-[700]">
          <div dangerouslySetInnerHTML={{ __html: heroText.title }} />
        </h1>
      </div>
      <div className="p-2 sm:w-[220px] sm:h-[58px]">
        <p
          className=" text-center text-[21px] text-[#383838] leading-tight"
          dangerouslySetInnerHTML={{ __html: heroText.subtitle }}
        ></p>
      </div>
      <div className=" mt-4 flex items-center justify-center">
        <button className=" text-[18px] text-white bg-[#0166F6] rounded-full px-14 py-3">
          Get shield vpn
        </button>
      </div>

      <div className="p-5 relative mt-20 ">
        <div className="absolute  bg-[#011B411A] rounded-lg  w-[120px] h-[120px] right-[-4px] top-[130px]"></div>
        <img
          src={images.mainImage}
          alt=""
          className="absolute w-[270px] h-[260px]"
        />
        <img
          src={images.secondaryImage}
          alt=""
          className="absolute w-[200px] right-[1px] top-[150px] z-1"
        />
      </div>
      <div className=" p-6 w-[400px] flex flex-col items-start justify-center space-y-6 mt-[350px] ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-2"
          >
            <img src={feature.icon} alt="" />
            <p className="text-[#00204E] text-[18px] font-[400]">
              {feature.text}
            </p>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="font-[700] text-[20px] text-[#00204E] pt-5">
            Trusted & Recommended by:
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-5">
            {trustedByCompanies.map((company,index)=>(
              <img src={company.image} alt=""
              key={index}
              className="w-28" />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
