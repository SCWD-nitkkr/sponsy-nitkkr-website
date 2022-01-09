import styles from "./App.module.css";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <body>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
