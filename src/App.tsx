import Advertise from "./components/Advertise"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App:React.FC=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Advertise/>

    </div>
  )
}
export default App