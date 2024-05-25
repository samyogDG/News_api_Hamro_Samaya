import { useState } from "react"
import Navbars from "./Components/Navbars"
import HomeSection from "./Components/HomeSection"
// import MainSection from "./Components/MainSection"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer";

const App = () => {
  const[category,setCategory] = useState("general");
  return (
    <div>
      <Navbars setCategory={setCategory} />
      <HomeSection/>
      {/* <MainSection/> */}
      <NewsBoard category={category} />
      <Footer/>
    </div>
    
  )
}

export default App
 