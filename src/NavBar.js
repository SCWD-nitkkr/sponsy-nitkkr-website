import "./styles.css";

export default function App() {
  return (
    <header id="body-header">
      <hr />
      <nav>
        <ul class="horizontal-list nav-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#screenshots">Screenshots</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <button type="button">Free Trail</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
