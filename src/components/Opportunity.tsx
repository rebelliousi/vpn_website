import { OpportunityData } from "../types/Opportunity"

const Opportunity:React.FC=()=>{
    return(
        <div className="mt-14 flex flex-col items-center justify-center container font-roboto">
            <h1 className="text-[26px] text-[#00204E] font-[700] ">Why Shield VPN?</h1>

            <div className="flex flex-col items-center justify-center">
                {OpportunityData.map((item,index)=>(
                    <div className="px-3" key={index}>
                        <div className="flex flex-col items-center justify-center p-5 mt-[50px]">
                            <div className=" bg-[#0166F60D] rounded-full p-7">
                                <img src={item.img} alt="" className="w-10 h-10" />

                            </div>
                            <div className="w-[400px]">
                            <h1 className=" mt-[22px] text-center text-[18px] font-[700] text-[#00204E]">{item.title}</h1>
                            <p className="text-[14px] text-center mt-[22px]">{item.paragraph}</p>
                            </div>
                            
                           

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
export default Opportunity