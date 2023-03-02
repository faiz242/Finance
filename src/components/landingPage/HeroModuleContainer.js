import styles from '../../css/landingPageStyle/HeroModuleContainer.module.css'
import phoneImage from '../../assets/Portfolio_Growing2.png'

function HeroModuleContainer() {
  return (
    <div className={styles.heroModuleContainer}>
      <div className={styles.punchLine}>
        <h1>Expert investing <br />for a better future
        </h1>
        <p>
          When you need investment solutions and not more options
        </p>
        <button id={styles.getStartedButton}>{`Get Started >`}  </button>
      </div>
      <div className={styles.decorativeImageContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.PortfolioCoinImg} src={phoneImage} alt="Coin pic" />
        </div>
      </div>
    </div>
  )
}

export default HeroModuleContainer;