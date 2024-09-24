import styles from './sidebar.module.scss';
import image1 from "../../images/images (7).jpeg"
import image2 from "../../images/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

function Sidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.brand}>
                <img className={styles.logo} src={image1} alt="Logo"/>
                <h1 className={styles.brandName}>BRESS</h1>
            </div>
            <ul className={styles.options}>
                <li className={styles.option}>
                    <DashboardIcon/>
                    <h3 className={styles.optionName}>Dashboard</h3>
                </li>
                <li className={styles.option}>
                    <AccountTreeIcon/>
                    <h3 className={styles.optionName}>Projects</h3>
                </li>
                <li className={styles.option}>
                    <ListAltIcon/>
                    <h3 className={styles.optionName}>Task List</h3>
                </li>
                <li className={styles.option}>
                    <FilterNoneIcon/>
                    <h3 className={styles.optionName}>Services</h3>
                </li>
                <li className={styles.option}>
                    <NotificationsIcon/>
                    <h3 className={styles.optionName}>notifications</h3>
                </li>
                <li className={`${styles.option} ${styles.conversation}`}>
                    <div className={styles.chat}>
                        <ForumIcon/>
                        <h3 className={styles.optionName}>chat</h3>
                    </div>
                    <Badge badgeContent={4} color="success"/>
                </li>
            </ul>
            <div className={styles.user}>
                <Avatar src={image2} sx={{width: 80, height: 80}} className={styles.userPicture}/>
                <h4 className={styles.userName}>Emily Jonson</h4>
                <h6 className={styles.userEmail}>jonson@bress.com</h6>
            </div>
        </div>
    )
}

export default Sidebar