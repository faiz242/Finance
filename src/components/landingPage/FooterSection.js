import styles from '../../css/landingPageStyle/FooterSection.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterSection() {
    return (
        <div className={styles.footerSection}>

            {/* <div className={styles.emailSection}>
                <p>Our weekly expert newsletter on stories that matter to your money.</p>
                <label>
                    <input type="text" />
                    <button>Subscribe</button>
              z  </label>
            </div>
            <hr /> */}
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <th>
                            Product
                        </th>
                        <th>
                            About
                        </th>
                        <th>
                            Legal
                        </th>
                    </thead>
                    <tbody>
                        <td>
                            <tr> Bonds</tr>
                            <tr>IPA</tr>
                            <tr>Portfolio Management System</tr>

                        </td>
                        <td>
                            <tr>Team</tr>
                            <tr>Career</tr>
                            <tr>Blogs</tr>
                        </td>
                        <td>
                            <tr>Contact</tr>
                            <tr>Privacy</tr>
                            <tr>Disclaimer</tr>
                            <tr>Term & Disclosure</tr>
                            <tr>Return & Cancellation</tr>
                        </td>
                    </tbody>


                </table>
            </div>
            <div className={styles.footerSocial}>
                <div className="line">
                    <h4>
                        You are building India’s future,<br />
                        we are building yours.
                    </h4>
                </div>

                <div className={styles.icon}>
                    <LinkedInIcon />
                    <YouTubeIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>
    )
}

export default FooterSection