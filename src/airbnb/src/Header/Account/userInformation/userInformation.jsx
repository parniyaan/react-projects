import  styles from "./userInformation.module.scss";

function userInformation() {
    return(
        <ul className={styles.option}>
            <li>sign up</li>
            <li>log in</li>
            <hr/>
            <li>Gift cards</li>
            <li>Airbnb your home</li>
            <li>Help Center</li>
        </ul>
    )
}

export default userInformation;