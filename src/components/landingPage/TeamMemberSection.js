import styles from '../../css/landingPageStyle/TeamMemberSection.module.css'
import pic2 from '../../assets/pic2.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamMemberSection() {
    return (
        <div className={styles.teamMemberSection}>
            <div className={styles.heading}>
                <h2>Meet Your New <br />Investment Team</h2>
            </div>
            <div className={styles.teamWrapper}>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span> <LinkedInIcon style={{ color: "#378fe9" }} /></span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span> <LinkedInIcon style={{ color: "#378fe9" }} /></span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span> <LinkedInIcon style={{ color: "#378fe9" }} /></span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    {/* <div className="overView" style={{margin:"-40px" , color:"white" }}>
                        <h5>Sandeep </h5>
                        <h6>CEO of Own Company</h6>
                    </div> */}
                    <div className={styles.credential}>
                        <span>
                            <LinkedInIcon style={{ color: "#378fe9" }} />
                        </span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span>
                            <LinkedInIcon style={{ color: "#378fe9" }} />
                        </span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span>
                            <LinkedInIcon style={{ color: "#378fe9" }} />
                        </span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span>
                            <LinkedInIcon style={{ color: "#378fe9" }} />
                        </span>
                        <span>View Credentials</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.teamImg} src={pic2} alt="" />
                    <div className={styles.credential}>
                        <span>
                            <LinkedInIcon style={{ color: "#378fe9" }} />
                        </span>
                        <span>View Credentials</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamMemberSection