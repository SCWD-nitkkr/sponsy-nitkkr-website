import styles from './App.module.css';
import Footertop from './Components/footer-top';

function App() {
  return (
    <body> 
      <footer className={styles.footer}>
        <Footertop/>
      </footer>
    </body>   
  );
}

export default App;
