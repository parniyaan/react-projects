import styles from './maintenance.module.scss';
import image5 from "../../images/images (55).jpeg";
import image6 from "../../images/images (66).jpeg";
import image7 from "../../images/images (77).jpeg";
import image8 from "../../images/images (2).jpeg";

function MaintenancePage() {
    return (
        <div className={styles.maintenanceContainer}>
            <div className={styles.maintenanceContent}>
                <h1 className={styles.maintenanceHeader}>HOW TO TAKE CARE OF YOUR CHRONOSWISS WATCH</h1>
                <p className={styles.describ}>A Chronoswiss watch is an investment for eternity. If you take good care of your watch, you will
                    enjoy it for the rest of your life.</p>
                <button>SHOW MORE</button>
            </div>
            <ul className={styles.maintenanceList}>
                <li className={styles.maintenanceItem}>
                    <img className={styles.picture} src={image5} alt="picture"/>
                    <div className={styles.maintenanceDescription}>
                        <h2 className={styles.maintenanceTitle}>WEARING THE WATCH</h2>
                        <p className={styles.maintenanceDes}>We highly recommend you to have the strap length adjusted
                            precisely for your wrist. This
                            doesn’t only offer higher wearing comfort, but also protects the watch and the clasp from
                            scratches. Additionally do not wear any jewelry which could scratch your watch on the same
                            arm.</p>
                    </div>
                </li>
                <li className={styles.maintenanceItem}>
                    <img className={styles.picture} src={image6} alt="picture"/>
                    <div className={styles.maintenanceDescription}>
                        <h2 className={styles.maintenanceTitle}>STORING THE WATCH</h2>
                        <p className={styles.maintenanceDes}>If you store multiple watches in a safe, you should make
                            sure that these aren’t touching each
                            other to prevent scratches. Thus it is recommended to store every watch in a travel case. In
                            any case you should make sure that all functional components stay in motion during longer
                            storage periods. This is why you should manually wind up your Chronoswiss at least once a
                            month or store it in a watch winder.</p>
                    </div>
                </li>

                <li className={styles.maintenanceItem}>
                    <img className={styles.picture} src={image7} alt="picture"/>
                    <div className={styles.maintenanceDescription}>
                        <h2 className={styles.maintenanceTitle}>SERVICE AND TEST OF WATER-RESISTANCE</h2>
                        <p className={styles.maintenanceDes}>Your Chronoswiss timepiece should be serviced regularly.
                            Chronoswiss recommends a service every four to five years so that the watch maintains its
                            value. Even if such a complete service is not pending, the water resistance should be tested
                            annually because seals can get brittle with time or the case can get permeable through
                            external influences like impacts or shocks. Make sure that only authorized service partners
                            open your watch at all times.</p>
                    </div>
                </li>

                <li className={styles.maintenanceItem}>
                    <img className={styles.picture} src={image8} alt="picture"/>
                    <div className={styles.maintenanceDescription}>
                        <h2 className={styles.maintenanceTitle}>CLEANING THE WATCH</h2>
                        <p className={styles.maintenanceDes}>A well-kept watch should be cleaned on a regular basis. Use
                            a fine brush or a damp cloth to delicately remove dirt and dust.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MaintenancePage;