import Nav from "./navbar.js";
import "./home.css";
import Card from "./card.js";
import Footer from "./footer.js";
function Home() {
  return (
    <div className="App">
      <Nav></Nav>
      <img className="bg_image" src={require("./nirvana_bg_2.png")} />
      <div className="slider_event">
        <div className="slider_one">
          <Card></Card>
        </div>
        <div className="slider_text">
          <br />
          <h2>Our Events</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            ultricies ipsum. Morbi ut enim ipsum. Vestibulum ultrices vitae
            neque at mattis. Duis ut posuere velit. Praesent rhoncus volutpat
            lacinia. Vestibulum velit erat, molestie id orci vel, dignissim
            scelerisque massa. Suspendisse malesuada tortor in mi elementum
            volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla facilisi. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cras a lorem vitae purus tempus
            posuere.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
