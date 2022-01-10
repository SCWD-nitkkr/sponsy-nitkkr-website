import "./Herostyles.css";

export default function App() {
  return (
    <div className="container">
      <div id="header">
        <section id="update">Update</section>
        <section id="appupdate">Apps Update is available now</section>
      </div>
      <div id="right">
        <section id="wr">The Hero Section of your SCWD Website</section>
        <section id="wr1">
          The no need for a WI-Fi or mobile data plan. The choice of over 1
          billion user around in the world. With we have optimized we help your
          team time when building websites
        </section>
      </div>
      <div id="btn">
        <button id="down">
          <div id="down1">Download</div>
        </button>
      </div>

      <div id="img">
        <img
          src="https://landing.zytheme.com/ladidapp/assets/images/mockup/iphone.png"
          alt=""
        />
      </div>
    </div>
  );
}
