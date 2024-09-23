import styles from "./Map.module.scss";
import worldImage from "../../../images/06a30699-aead-492e-ad08-33ec0b383399.webp";
import africaImage from "../../../images/images.jpeg";
import italyImage from "../../../images/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.webp";
import asiaImage from "../../../images/d77de9f5-5318-4571-88c7-e97d2355d20a.webp";
import spainImage from "../../../images/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.webp";
import americaImage from "../../../images/06a30699-aead-492e-ad08-33ec0b383399.webp";
import {useEvents} from "../../../context/context.jsx";

function Map() {

    const {setContent, setIsClicked} = useEvents()

    function clickHandler(event) {
        const liElement = event.currentTarget;
        const h5Element = liElement.querySelector('h5')
        setContent(h5Element.textContent)
        setIsClicked(false)
    }

    return (
        <div className={styles.where}>
            <h4>Search by region</h4>
            <ul className={styles.maps}>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={worldImage} alt="world"/>
                    <h5>I`m flexible</h5>
                </li>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={africaImage} alt="Africa"/>
                    <h5>Africa</h5>
                </li>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={italyImage} alt="Italy"/>
                    <h5>Italy</h5>
                </li>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={asiaImage} alt="Asia"/>
                    <h5>Southeast Asia</h5>
                </li>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={spainImage} alt="Spain"/>
                    <h5>Spain</h5>
                </li>
                <li className={styles.map} onClick={clickHandler}>
                    <img src={americaImage} alt="Amrica"/>
                    <h5>South America</h5>
                </li>
            </ul>
        </div>
    )
}

export default Map;