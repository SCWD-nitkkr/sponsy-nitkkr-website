import styles from './FeatureSection.module.css';
function FeatureSection(){
    return(
        <div className={styles.featuresRow}>
      <div className={styles.featuresHead}>
        <p className={styles.featureHeading1}>Our Future</p>
        <p className={styles.featureHeading2}>Our Amazing Features</p>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard+' '+ styles.card1}>
          <div className={styles.featureCardIcon}>
            <img className={styles.cardBg} src="images/bg-icon-1.svg"/>
            <img className={styles.cardIcon} src="images/feature-icon1.svg"/>
          </div>
          <div className={styles.featureCardDesc}>
            <h3>App Development</h3>
            <p>
              We provide the best UI/UX Design by following the latest trends of the market
            </p>
          </div>
        </div>

        <div className={styles.featureCard+' '+ styles.card2}>
          <div className={styles.featureCardIcon}>
            <img className={styles.cardBg} src="images/bg-icon-1.svg"/>
            <img className={styles.cardIcon} src="images/feature-icon1.svg"/>
          </div>
          <div className={styles.featureCardDesc}>
            <h3>App Development</h3>
            <p>
              We provide the best UI/UX Design by following the latest trends of the market
            </p>
          </div>
        </div>

        <div className={styles.featureCard+' '+ styles.card3}>
          <div className={styles.featureCardIcon}>
            <img className={styles.cardBg} src="images/bg-icon-1.svg"/>
            <img className={styles.cardIcon} src="images/feature-icon1.svg"/>
          </div>
          <div className={styles.featureCardDesc}>
            <h3>App Development</h3>
            <p>
              We provide the best UI/UX Design by following the latest trends of the market
            </p>
          </div>
        </div>

        <div className={styles.featureCard+' '+ styles.card4}>
          <div className={styles.featureCardIcon}>
            <img className={styles.cardBg} src="images/bg-icon-1.svg"/>
            <img className={styles.cardIcon} src="images/feature-icon1.svg"/>
          </div>
          <div className={styles.featureCardDesc}>
            <h3>App Development</h3>
            <p>
              We provide the best UI/UX Design by following the latest trends of the market
            </p>
          </div>
        </div>
      </div>
    </div>
    )
};

export default FeatureSection;