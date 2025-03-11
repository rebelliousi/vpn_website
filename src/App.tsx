import Advertise from "./components/Advertise"
import Comments from "./components/Comments"
import Hero from "./components/Hero"
import Install from "./components/Install"
import Navbar from "./components/Navbar"
import Opportunity from "./components/Opportunity"

const App:React.FC=()=>{
  return(
    <div className="bg-[#E9F2FF4D]">
      <Navbar/>
      <Hero/>
      <Advertise/>
      <Install/>
      <Comments/>
      <Opportunity/> 

    </div>
  )
}
export default App