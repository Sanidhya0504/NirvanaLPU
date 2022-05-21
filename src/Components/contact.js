import Nav from "./navbar.js";
import Footer from "./footer.js";
import "./contact.css";
function Contact() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Contact Now</h1>
      <p className="contact_text">
        We’re always in the market for new talent! Partners & suppliers, we
        would love for you to join our database, so as future opportunities to
        collaborate present themselves, we can be in touch.
      </p>

      <h3 className="contact_details">Email Us</h3>
      <p>blahblahblah@blah.com</p>
      <p>+91(IND) 1234567890</p>
      <div className="contact_footer_wrap">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Contact;
