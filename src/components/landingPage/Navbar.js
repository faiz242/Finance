import {  Link } from 'react-router-dom'
import styles from '../../css/landingPageStyle/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
               JJ FINANCE
            </div>
            <div className={styles.contents}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">BLOG & MORE</Link>  
                    </li>
                    <li>
                    <Link to="/">TEAM</Link>     
                    </li>
                    <li>
                    <Link to="/login"> MEMBER LOGIN</Link>       
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar