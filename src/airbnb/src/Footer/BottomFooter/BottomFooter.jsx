import styles from './BottomFooter.module.scss';

function BottomFooter() {
    return (
        <div className={styles.details}>
            <div className={styles.detail}>
                <h4>Support</h4>
                <span>Help Center</span>
                <span>AirCover</span>
                <span>Anti-discrimination</span>
                <span>Disability support</span>
                <span>Cancellation option</span>
                <span>Report Neighborhood concern</span>
            </div>
            <div className={styles.detail}>
                <h4>Hosting</h4>
                <span>Airbnb your home</span>   
                <span>AirCover for hosts</span>
                <span>Hosting resources</span>
                <span>Community forum</span>
                <span>Hosting responsibly</span>
                <span>Airbnb friendly apartment</span>
                <span>Join a free Hosting class</span>
            </div>
            <div className={styles.detail}>
                <h4>Airbnb</h4>
                <span>Newsroom</span>
                <span>New features</span>
                <span>careers</span>
                <span>Investors</span>
                <span>Gift cards</span>
                <span>Airbnb.org emergency stays</span>
            </div>
        </div>
    )
}

export default BottomFooter;