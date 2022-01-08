import styles from "../styles/feedback.module.css"

export default function Feedback()
{
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByclassName("slide");
   
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "flex";  
    
  }

  <div className={styles.feedback+' '+styles.slider}>
      <div className={styles.slide}>
        <a className={styles.prev} onClick="plusSlides(-1)">&#10094;</a>
        <div className={styles.content}>
          <h1>Leila Domniuc</h1>
          <h2>Head of marketing,Facebook</h2>
          <p className={styles.rating}>⭐⭐⭐⭐</p>
          <p className={styles.review}>
            My project was a simple task,but the persistence of ladidapp web
            development team turend an very awesome and grear project make me
            very happy Thank you so much.
          </p>
        </div>
        <div className={styles.forImage}>
          <img src="images/person.png" />
        </div>
        <a className={styles.next} onClick={plusSlides(1)}>&#10095;</a>
      </div>

      <div className={styles.slide}>
        <a className={styles.prev} onClick="plusSlides(-1)">&#10094;</a>
        <div className={styles.content}>
          <h1>Leila Domniuc</h1>
          <h2>Head of marketing,Facebook</h2>
          <p className={styles.rating}>⭐⭐⭐⭐</p>
          <p className={styles.review}>
            My project was a simple task,but the persistence of ladidapp web
            development team turend an very awesome and grear project make me
            very happy Thank you so much.
          </p>
        </div>
        <div className={styles.forImage}>
          <img src="images/person.png" />
        </div>
        <a className={styles.next} onClick={plusSlides(1)}>&#10095;</a>
      </div>

      <div className={styles.slide}>
        <a className={styles.prev} onClick="plusSlides(-1)">&#10094;</a>
        <div className={styles.content}>
          <h1>Leila Domniuc</h1>
          <h2>Head of marketing,Facebook</h2>
          <p className={styles.rating}>⭐⭐⭐⭐</p>
          <p className={styles.review}>
            My project was a simple task,but the persistence of ladidapp web
            development team turend an very awesome and grear project make me
            very happy Thank you so much.
          </p>
        </div>
        <div className={styles.forImage}>
          <img src="images/person.png" />
        </div>
        <a className={styles.next} onClick={plusSlides(1)}>&#10095;</a>
      </div>
    </div>

}