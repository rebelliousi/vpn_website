import Advertise from "./components/Advertise"
import Hero from "./components/Hero"
import Install from "./components/Install"
import Navbar from "./components/Navbar"

const App:React.FC=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Advertise/>
      <Install/>

    </div>
  )
}
export default App