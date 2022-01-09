import "./styles.css";

export default function App() {
  return (
    <header class="header header-light header-sticky">
      <nav class="navbar navbar-sticky navbar-expand-lg" id="primary-menu">
        <div class="container">
          <a class="logo navbar-brand" href="index.html">
            <img
              class="logo logo-light"
              src="logo-light.png"
              alt="LadidApp Logo"
            />
          </a>
          <div
            class="navbar-collapse collapse show"
            id="navbarContent"
            // style=""
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" data-scroll="scrollTo" href="#hero">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll="scrollTo" href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll="scrollTo" href="#screens">
                  screenshots
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll="scrollTo" href="#pricing">
                  pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll="scrollTo" href="#reviews">
                  reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll="scrollTo" href="#news">
                  news
                </a>
              </li>
            </ul>
            <div class="module-container">
              <div class="module module-cta">
                <a class="btn" data-scroll="scrollTo" href="#action">
                  <span>freetrial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
