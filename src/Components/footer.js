import background from "./footer.png";
import "./footer.css";

import SocialFollow from "./socialFollow";
function Footer() {
  return (
    <div className="footer_wrap">
      <div className="footer" style={{ backgroundImage: `url(${background})` }}>
        <br />
        <h3>Nirvana LPU</h3>
        <hr className="line" />
        <SocialFollow />
      </div>
    </div>
  );
}

export default Footer;
