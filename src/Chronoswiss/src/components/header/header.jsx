import {useState} from 'react';
import styles from './header.module.scss';
import {NavLink} from "react-router-dom";
import Warranty from "./warranty/warranty.jsx";

function Header() {
    const [language, setLanguage] = useState('');
    const [region, setRegion] = useState('');
    const [warrantyIsClicked, setWarrantyIsClicked] = useState(false);

    function warrantyHandler() {
        setWarrantyIsClicked(!warrantyIsClicked)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <NavLink to="/" className={styles.logo}>CHRONOSWISS</NavLink>
                <svg className={`${styles.icon} ${styles.menu}`} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z"/>
                </svg>
            </div>
            <ul className={styles.navbar}>
                <NavLink to="./watches" className={styles.navItem}>WATCHES</NavLink>
                <li className={styles.navItem}
                    onClick={warrantyHandler}>WARRANTY & SERVICE
                </li>
                <NavLink  to="/Blog" className={styles.navItem}>BLOG</NavLink>
            </ul>
            <div className={styles.items}>
                <div className={styles.options}>
                    <select
                        defaultValue="EN"
                        className={styles.languageSelection}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="EN">EN</option>
                        <option value="DN">DN</option>
                        <option value="JA">JA</option>
                        <option value="ZH">ZH</option>
                        <option value="KO">KO</option>
                        <option value="ES">ES</option>
                        <option value="FR">FR</option>
                        <option value="IT">IT</option>
                    </select>

                    <select
                        defaultValue="EU"
                        className={styles.countriesSelection}
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value="INTL">INTL</option>
                        <option value="CH">CH</option>
                        <option value="EU" disabled selected hidden>EU</option>
                        <option value="US">US</option>
                        <option value="JP">JP</option>
                    </select>
                </div>
                <div className={styles.details}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2L443 275.5c23.6-22 37-52.8 37-85.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zm34.9-57.1C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 36-13.1 70.6-36.6 97.5c-3.4 3.8-6.9 7.5-10.7 11l-184 171.3c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5z"/>
                    </svg>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M412.1 416.6C398.1 361.1 347.9 320 288 320H224c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6zm-28.5 23.4C347.5 465.2 303.5 480 256 480s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1h64c50.4 0 91.6 38.8 95.7 88.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-256a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-80-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z"/>
                    </svg>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M327.9 2.2c-7.6 4.5-10.2 14.2-5.8 21.9l98 167.9H155.9l98-167.9c4.5-7.6 1.9-17.4-5.8-21.9s-17.4-1.9-21.9 5.8L118.8 192H65 32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H40L99.9 463.5C107 492 132.6 512 162 512H414c29.4 0 55-20 62.1-48.5L536 224h24c8.8 0 16-7.2 16-16s-7.2-16-16-16H544 511 457.2L349.8 7.9c-4.5-7.6-14.2-10.2-21.9-5.8zM73 224H503L445.1 455.8C441.5 470 428.7 480 414 480H162c-14.7 0-27.5-10-31-24.2L73 224zM208 336c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"/>
                    </svg>
                </div>
            </div>
            {warrantyIsClicked && <Warranty warrantyIsClicked={warrantyIsClicked}/>}
        </div>
    );
}

export default Header;
