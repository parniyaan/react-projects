import profile from "../../Icons/profile-circle-icon-256x256-cm91gqm2.png"
import styles from "./Account.module.scss"
import {useState} from "react";
import UserInformation from "./userInformation/userInformation.jsx";

function Account (){
    const [isClicked,setIsCLicked] = useState(false)

    function toggleClicked(){
        setIsCLicked(!isClicked)
    }

    return(
        <div className={styles.account} onClick={toggleClicked}>
            <svg className={styles.menu} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
            <img className={styles.profile} src={profile} alt="profile"/>
            {isClicked && <UserInformation/>}
        </div>
    )
}

export default Account;