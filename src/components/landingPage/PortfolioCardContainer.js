import styles from '../../css/landingPageStyle/PortfolioCardContainer.module.css'

function PortfolioCardContainer() {
    return (
        <div className={styles.portfolioCardContainer}>
            <div className={styles.heading}>
                <h2>How We Help You</h2>
            </div>
            <div className={styles.portfolioCard}>
                <div className={styles.card}>
                    <div className={styles.miniIcon}>
                        <span>PMS</span>
                        <span className={styles.money}>Min ₹50 Lakh</span>
                    </div>
                    <h4>
                        Dedicated experts to <br /> manage your money
                    </h4>
                    <ul>
                        <li>Dedicated human experts</li>
                        <li>Option to migrate existing portfolio </li>
                        <li>No fixed fee, only profit share</li>
                    </ul>
                    <button className={styles.exploreBtn}>Explore PMS</button>
                </div>
                <div className={styles.card}>
                    <div className="miniIcon">
                        <span>Mutual Fund</span>
                        <span>Min ₹50 Lakh</span>
                    </div>
                    <h4>
                        Portfolios designed to <br /> grow long-term wealth
                    </h4>
                    <ul>
                        <li> For every investing style </li>
                        <li>Rebalancing recommendations </li>
                        <li>Human support when you need it</li>
                    </ul>
                    <button className={styles.exploreBtn}>Explore Solutions</button>
                </div>
            </div>
            <div className={styles.footer}>
                <p>
                    JJ Finance Service Investments Private Limited is a Portfolio Manager and Mutual Fund distribution services are offered through  JJ Finance Service Pvt Limited.
                </p>
            </div>
        </div>
    )
}

export default PortfolioCardContainer