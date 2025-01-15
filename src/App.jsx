import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import HomeArray from "./components/HomeArray.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";


import "./App.css"; 

function App() {
  return (
    <div>
    <Main>
     <Banner/>
    <HomeArray/>
    </Main>
    </div>
  )
}

export default App