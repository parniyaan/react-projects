import styles from './header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.searchInput}>
                <input type="text" placeholder={"Search"} className={styles.input}/>
                <SearchIcon/>
            </div>
            <div className={styles.options}>
                <span className={`${styles.option} ${styles.card}`}>
                    <StyleIcon/>
                    <h5 className={styles.optionName}>Card</h5>
                </span>
                <span className={`${styles.option} ${styles.list}`}>
                    <FormatListBulletedIcon/>
                    <h5 className={styles.optionName}>List</h5>
                </span>
            </div>
        </div>
    )
}

export default Header;