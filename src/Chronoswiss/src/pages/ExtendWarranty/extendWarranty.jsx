import styles from './extendWrranty.module.scss';

function ExtendWarranty() {
    return (
        <div className={styles.container}>
            <div className={styles.content1}>
                <h1 className={styles.title1}>EXTEND YOUR CHRONOSWISS WARRANTY NOW</h1>
                <p className={styles.text1}>Register your watch online now and we will extend the warranty of your Chronoswiss timepiece to 3
                    years.</p>
                <button className={styles.extend}>EXTEND WARRANTY</button>
                <button>SHOW MORE</button>
            </div>
            <div className={styles.content2}>
                <h1 className={styles.title2}>DEAR CHRONOSWISS OWNER</h1>
                <p className={styles.text2}>We hope your new watch gives you great joy.
                    If you purchased it on or after 1/1/2019 and register HERE , we will extend the warranty of your
                    Chronoswiss timepiece to 3 years. Please enter all required data for your application into the form
                    and upload a photo or a scan of your sales receipt. We will review your documents and then get back
                    to you as soon as possible.</p>
                <a href="#">We are glad to answer your questions.</a>
                <p className={styles.text3}>
                    IT´S THIS EASY TO EXTEND THE WARRANTY OF YOUR CHRONOSWISS TIMEPIECE TO 3 YEARS
                </p>
                <p className={styles.rule}><span>1</span>Right after you click on the "Extend warranty" button, register yourself as a
                    Chronoswiss customer or re-register.</p>
                <p className={styles.rule}><span>2</span>Please enter all required data for the application into the form.</p>
                <p className={styles.rule}><span>3</span>Upload a photo or scan of your sales receipt or guarantee certificate here.</p>
                <p className={styles.rule}><span>4</span>After your documents have been acknowledged, you will receive a confirmation of the warranty extension by e-mail.</p>
                <button className={styles.apply}>EXTEND WARRANTY NOW</button>
            </div>
        </div>
    )
}

export default ExtendWarranty;