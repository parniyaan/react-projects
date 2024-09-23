import image6 from "../../images/images (6).jpeg";
import image7 from "../../images/download.jpeg";
import image8 from "../../images/images (55).jpeg";
import image9 from "../../images/images (3).jpeg";
import styles from './blog.module.scss'


function Blog() {
    return (
        <ul className={styles.blogContainer}>
            <li className={styles.blogItem}>
                <img  className={styles.blogImage} src={image7} alt=""/>
                <div className={styles.blogInfo}>
                    <h3 className={styles.blogTitle}>One step ahead</h3>
                    <i className={styles.blogDescription}>Chronoswiss, 2023.07.24. 07:42</i>
                    <p className={styles.blogdes}>Introducing the new Chronoswiss "Friend of the Brand" Luna Thiel. </p>
                </div>
            </li>
            <li className={styles.blogItem}>
                <img  className={styles.blogImage} src={image6} alt=""/>
                <div className={styles.blogInfo}>
                    <h3 className={styles.blogTitle}>The Onion Crown: Tracing Chronoswiss' 40-year Heritage</h3>
                    <i className={styles.blogDescription}>Chronoswiss, 2023.07.11. 14:46</i>
                    <p className={styles.blogdes}>The Onion Crown, a distinct feature winding its way through the story of Chronoswiss, is more
                        than a design element; it's a tactile emblem of our 40-year heritage and a symbol of our
                        enduring commitment to the art of mechanical watchmaking.</p>
                </div>
            </li>
            <li className={styles.blogItem}>
                <img  className={styles.blogImage} src={image8}  alt=""/>
                <div className={styles.blogInfo}>
                    <h3 className={styles.blogTitle}>A Journey Through Time and Space: From Jupiter to the Sun</h3>
                    <i className={styles.blogDescription}>Chronoswiss, 2023.07.10. 12:20</i>
                    <p className={styles.blogdes}>The Chronoswiss Space Timer collection is a unique blend of artisanal craftsmanship, advanced
                        materials, and the deep fascination with celestial bodies.</p>
                </div>
            </li>
            <li className={styles.blogItem}>
                <img  className={styles.blogImage} src={image9}  alt=""/>
                <div className={styles.blogInfo}>
                    <h3 className={styles.blogTitle}>Crafted in Lucerne</h3>
                    <i className={styles.blogDescription}>Chronoswiss, 2023.07.05. 09:46</i>
                    <p className={styles.blogdes}>A deep dive into the Artistry of the Delphis Oracle.</p>
                </div>
            </li>
        </ul>
    )
}

export default Blog;