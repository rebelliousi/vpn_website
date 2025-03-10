import logo from "../assets/img/Union.png"
const Navbar:React.FC=()=>{
    return(
        <div className="container mx-auto bg-white py-4 px-4 flex items-center justify-between font-roboto">
            <div className="flex justify-center items-center space-x-3">
                <img className="w-[38px] h-[45px]" src={logo} alt="" />
                <h1 className=" text-[#002253] text-[30px] font-bold ">shield vpn </h1>
            </div>

            <div>
                <button className="bg-[#0166F6] font-[300] rounded-full px-6 py-1 text-white text-[15px]">Download</button>
            </div>

        </div>
    )
}
export default Navbar