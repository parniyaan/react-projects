import styles from './Footer.module.scss';
import TopFooter from "./TopFooter/TopFooter.jsx";
import BottomFooter from "./BottomFooter/BottomFooter.jsx";
import ContactUs from "./Contactus/contactUs.jsx";


function Footer() {
    return (
        <div className={styles.footer}>
            <h1>Inspiration for future getaways</h1>
            <TopFooter/>
            <BottomFooter/>
            <ContactUs/>
        </div>
    )
}

export default Footer;