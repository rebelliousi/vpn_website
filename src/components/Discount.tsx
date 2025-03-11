import { DiscountData } from "../types/Discount";
import save from "../assets/img/Save.png"
import numb from "../assets/img/50%.png"

const Discount: React.FC = () => {
  return (
    <div className="mt-14 container font-roboto mx-auto p-5 flex flex-col items-center justify-center">
      <h1 className="text-[30px] w-[400px] text-center text-[#00204E] font-[500]">
        Save 50% on Shield <br /> VPN today
      </h1>

      {DiscountData.map((item, index) => (
        <div key={index} className=" relative py-5 p-20 mt-[70px]">
          <div className="h-[450px] w-[320px] flex flex-col items-center justify-center bg-[#0166F60D] rounded-xl p-20">
            <p className="text-center text-[20px] font-[400]">{item.date}</p>
            <p className="text-center text-[40px] font-[700] text-[#0166F6] mt-[50px]">
              {item.price}
            </p>

            <p className="text-center text-[11px] mt-[40px]">
              {item.description}
            </p>
            {item.hasIcon && item.iconUrl && (
              <div className="absolute right-12 top-16">
                <img src={item.iconUrl} alt="" className="w-24 h-24  " />
              
                 <img src={save} alt="" className="absolute  top-6 right-5" />
                 <div>
                   
                 </div>
             
          
               
              </div>
            )}
          </div>
        </div>
      ))}

      <p className="text-center mt-[100px] text-[14px]">Privacy policy | Terms of service © Shield VPN 2022</p>
    </div>
  );
};
export default Discount;
