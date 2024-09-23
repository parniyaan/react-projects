import styles from './service.module.scss';

function Service() {
    return (
        <div className={styles.serviceContainer}>
            <div className={styles.content}>
                <h1>DO YOU NEED ASSISTANCE WITH YOUR CHRONOSWISS WATCH?</h1>
                <p>Thank you very much for choosing Chronoswiss. We hope you take great joy in your new timepiece.
                    Our watch specialists and technicians will be happy to help you.</p>
                <button className={styles.aboutUs}>HOW TO RICH US</button>
                <br/>
                <button>PRICE LIST SERVICE</button>
            </div>
            <ul className={styles.serviceLocations}>
                <li className={styles.serviceLocation}>
                    <h1 className={styles.afterService}>AFTER-SALES-SERVICE</h1>
                    <h1 className={styles.loc}>HQ</h1>
                    <p className={styles.adress}>Chronoswiss AG
                        Löwenstrasse 16b
                        CH - 6004 Luzern</p>
                    <p className={styles.tel}>Tel: +41 (0) 41 552 21 00</p>
                    <p className={styles.mail}>E-Mail: luzern@chronoswiss.com</p>
                </li>
                <li className={styles.serviceLocation}>
                    <h1 className={styles.afterService}>AFTER-SALES-SERVICE</h1>
                    <h1 className={styles.loc}>EU</h1>
                    <p className={styles.adress}>Hartstraße 52, 82110
                        Germering, Deutschland</p>
                    <p className={styles.tel}>Tel : +49 (0) 89 1787 665 11</p>
                    <p className={styles.mail}>E-mail : jolanta.rauchfuss@chronoswiss.com</p>
                </li>
                <li className={styles.serviceLocation}>
                    <h1 className={styles.afterService}>AFTER-SALES-SERVICE</h1>
                    <h1 className={styles.loc}>USA</h1>
                    <p className={styles.adress}>1801 S. Metro Pkwy
                        Dayton, OH 45459</p>
                    <p className={styles.tel}>Phone: +1 800 STOLLCO (786-5526)</p>
                    <p className={styles.mail}>E-Mail: stoll@americaswatchmaker.com
                        https://www.americaswatchmaker.com/</p>
                </li>
                <li className={styles.serviceLocation}>
                    <h1 className={styles.afterService}>AFTER-SALES-SERVICE</h1>
                    <h1 className={styles.loc}>CN</h1>
                    <p className={styles.adress}>oom 562, Shanghai Centre, East office building
                        1376 West Nanjing Road
                        Jing’an District
                        Shanghai, China</p>
                    <p className={styles.tel}>
                        Phone: +8621 6236 0208</p>
                    <p className={styles.mail}>Email: sav@melchers.com.cn</p>
                </li>

            </ul>
        </div>
    )
}

export default Service;