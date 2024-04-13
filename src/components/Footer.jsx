import Image from 'react-bootstrap/Image';
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footerImg">
      <div className="img"><Image src="./footer.png" fluid/></div>
      <div className="centered badge text-wrap">
        <h3 > Join the <span>family</span> today! </h3>
        <p> Take advantage of the various products to build your own customized trading strategies. </p>
        <button>Open new account</button>
      </div>
    </div>
  </>
  )
}

export default Footer