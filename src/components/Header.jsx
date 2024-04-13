import Image from 'react-bootstrap/Image';
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className="heroImg ">
        <div className="img"><Image src="./header.png" fluid/></div>
        <div className="centered badge text-wrap">
          <h3 > Welcome to <span>marketplace!</span> </h3>
          <p> India’s first products marketplace with advanced tools & apps to empower your every trade! </p>
        </div>
      </div>
    </>
  )
}

export default Header