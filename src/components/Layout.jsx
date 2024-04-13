import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MainSection from "./MainSection"

const Layout = () => {
  return (
    <>
    <div className="container-lg">
    <Navbar/>
    <Header/>
    <MainSection/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout