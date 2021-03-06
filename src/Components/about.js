import Nav from "./navbar.js";
import Footer from "./footer.js";
import Logo from "./logo_transp.png";
import background from "./transparent_bg.png";
import "./about.css";
function About() {
  return (
    <div
      className="about_bg App"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Nav></Nav>
      <img className="nirvana_logo" src={Logo} />
      <p className="about_text">
        Your perfect event starts here. We believe in action — in doing before
        saying. Live experiences, virtual events, and social impact actions —
        connect to audiences through creative storytelling and thoughtful,
        purpose-driven engagement.
      </p>
      {/*
      <div
        className="lead_banner"
        style={{ backgroundImage: `url(${background})` }}
      >
        <br />
        
        <h3>MEET OUR LEADERS</h3>
        <br />

        <img
          className="lead_pic"
          style={{ width: 275, height: 250, borderRadius: 200 }}
          src={
            "https://humornama.com/wp-content/uploads/2021/01/150-Rupiya-Dega-Meme-Template-of-Kachra-Seth-1024x576.jpg"
          }
        />
        <br />
        <h3>150 Rupiya Dega</h3>
        <br />
        
        </div>*/}
      <hr />
      <h3>WHAT WE DO</h3>
      <br />
      <p className="about_text">
        Through innovative design and flawless execution, we produce memorable
        and unique events of all shapes, sizes and styles.
      </p>

      <h3>OUR CULTURE</h3>
      <br />
      <p className="about_text">
        We do not need magic, we carry all the power we need inside ourselves
        already: We have the power to imagine better. We aim to create a
        diverse, equitable, and inclusive community to work in. We aspire to be
        as environmentally conscious as possible in an industry that can be
        wasteful. We strive to serve our communities and give our time and
        resources. Our motto is simple: Celebrate. Live. Love. Laugh.
      </p>
      <Footer></Footer>
    </div>
  );
}

export default About;
