import image1 from "../../../images/images (1).jpeg";
import image2 from "../../../images/images (2).jpeg";
import image3 from "../../../images/images (3).jpeg";
import styles from "./warranty.module.scss";
import {NavLink} from "react-router-dom";


function Warranty({warrantyIsClicked}) {

    function clickHandler() {
        warrantyIsClicked(false)
    }

    return (
        <ul className={`${styles.warrantyOptions} ${warrantyIsClicked ? styles.fade : ""}`}>
            <NavLink to="/Extend-warranty" onClick={clickHandler} className={styles.warrantyOption}>
                <img src={image1} alt="EXTEND WARRANTY"/>
                <h4>EXTEND WARRANTY</h4>
            </NavLink>
            <NavLink to="/Maintenance" className={styles.warrantyOption} onClick={clickHandler}>
                <img src={image2} alt="CARE AN MAINTENANCE"/>
                <h4>CARE AND MAINTENANCE</h4>
            </NavLink>
            <NavLink className={styles.warrantyOption}  to="/Service" onClick={clickHandler}>
                <img src={image3} alt="AFTER-SALES SERVICE"/>
                <h4>AFTER-SALES SERVICE</h4>
            </NavLink>
        </ul>
    )
}

export default Warranty;