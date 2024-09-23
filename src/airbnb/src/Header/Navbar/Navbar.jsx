import styles from './Navbar.module.scss';
import {useEvents} from "../../context/context.jsx";

function Navbar({
                    setStayIsCLicked,
                    setExperiencesIsCLicked,
                    stayIsClicked,
                    experiencesIsClicked,
                    setDate,
                    setAddGuest,
                    setNumber
                }) {

    const {setContent} = useEvents()

    function stayClickHandler() {
        setStayIsCLicked(true);
        setExperiencesIsCLicked(false);
        setNumber(0)
        setDate("Any time")
        setAddGuest(false)
        setContent("Search destination")
    }

    function experiencesClickHandler() {
        setExperiencesIsCLicked(true);
        setStayIsCLicked(false);
        setNumber(0)
        setDate("Any time")
        setAddGuest(false)
        setContent("Search destination")
    }

    return (
        <ul className={styles.navbar}>
            <li className={stayIsClicked ? styles.active : ""} onClick={stayClickHandler}>
                Stays
            </li>
            <li className={experiencesIsClicked ? styles.active : ""} onClick={experiencesClickHandler}>
                Experiences
            </li>
        </ul>
    );
}

export default Navbar;
