import Nav from "./navbar.js";
import background from "./event_bg.png";
import "./events.css";
function Events() {
  return (
    <div className="App">
      <Nav></Nav>
      <div
        className="event_back"
        style={{ backgroundImage: `url(${background})` }}
      >
        <br />
        <br />
        <h1>Coming Soon...</h1>
      </div>
    </div>
  );
}

export default Events;
