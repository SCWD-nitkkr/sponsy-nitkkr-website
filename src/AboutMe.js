import "./styles.css";

export default function App() {
  return (
    <section class="aboutsection">
      <div class="container">
        <div id="left">
          <img
            src="https://landing.zytheme.com/ladidapp/assets/images/cover/about.png"
            alt=""
          />
        </div>
        <div id="right">
          <p class="head1">About Us</p>
          <h2 id="h2css">Best Financing App in The World</h2>
          <p id="desc">
            Best financing app ever in the world. Easy to use and very user
            friendly for mobile banking. You can control your card easily and
            send money some one just one click.
          </p>
          <button className="readbtn btn1">Read More</button>
        </div>
      </div>
    </section>
  );
}
