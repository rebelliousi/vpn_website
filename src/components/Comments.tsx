import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { testimonials } from "../types/Comments"
const Comments:React.FC=()=>{
    const settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
    }
    return(
        
        <div className=" mt-5 font-roboto p-5 container mx-auto font-roboto flex flex-col items-center justify-center">
            <Slider {...settings} className=" w-full flex   ">
            {testimonials.map((item,index)=>(
                <div  key={index} className="px-4">
                  <div className="bg-[#C4C4C41A] h-[300px]  p-5  rounded-xl   ">
                 <img src={item.stars} alt="" />
                 <p className="text-[11px] h-[168px] leading-loose mt-[20px] w-[130px]">
                    {item.comment}
                 </p>
                
                 <h1 className="mt-[40px] text-[12px] font-[500]  ">- <span className="p-1">{item.fullName}</span> </h1>
               
                

                </div>
                </div>
                
            ))}


            </Slider>
           
        </div>
    )
}
export default Comments