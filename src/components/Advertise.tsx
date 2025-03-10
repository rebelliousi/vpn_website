import advertiseData from "../types/Advertise";
const Advertise: React.FC = () => {
  return (
    <div className="p-5 container mx-auto font-roboto flex flex-col items-center justify-center">
      {advertiseData.map((item, index) => (
        <div
          key={index}
          className="relative p-4 flex flex-col items-start justify-center"
        >
          <img
            className="rounded-lg relative z-10"
            src={item.image}
            alt={item.title}
            style={{
              ...(item.imagePosition === "right"
                ? { left: "auto", right: "5px" }
                : { left: "5px", right: "auto" }),
            }}

          />
          <div className="absolute inset-0 w-[400px] h-[380px] top-[30px] rounded-lg z-0"
          style={{
            backgroundColor:item.backgroundColor,
            left:item.imagePosition!=='right' ? '5px' : 'auto',
            right:item.imagePosition=='right' ? '5px' : 'auto'
          }}/>

          <h1 className="text-left text-[26px] text-[#00204E] font-[500] mt-10 leading-tight">
            {item.title}
          </h1>
          <p className="text-left text-[#383838] text-[16px] mt-5">
            {item.description}
          </p>


          
        </div>
      ))}
    </div>
  );
};
export default Advertise;
