import styles from "../staysInformation/StaysInformation.module.scss";
import Map from "../Map/Map.jsx";
import {useEvents} from "../../../context/context.jsx";
import Calender from "../calender/calender.jsx";
import AddGuest from "../AddGuest/AddGuest.jsx";

function ExperiencesInformation({date, setDate, addGuest, setAddGuest,setNumber,number}) {
    const {isClicked, setIsClicked, content, dateIsCLicked, setDateIsCLicked} = useEvents()

    function clickHandler() {
        setIsClicked(!isClicked)
        setDateIsCLicked(false);
        setAddGuest(false);
    }

    function dateHandler() {
        setDateIsCLicked(!dateIsCLicked)
        setIsClicked(false);
        setAddGuest(false);
    }

    function addGuests() {
        setAddGuest(!addGuest)
        setIsClicked(false);
        setDateIsCLicked(false);
    }

    return (
        <div>
            <ul className={styles.informations}>
                <li className={`${styles.info} ${styles.information}`} onClick={clickHandler}>
                    <h5>Where</h5>
                    <h4>{content}</h4>
                </li>
                <li className={`${styles.info} ${styles.information}`} onClick={dateHandler}>
                    <h5>Date</h5>
                    <h4>{date}</h4>
                </li>
                <li className={`${styles.info} ${styles.information}`} onClick={addGuests}>
                    <h5>Who</h5>
                    <h4>{number === 0 ? "Add guests" : number}</h4>

                </li>
                <span className={styles.search}>
                <svg className={styles.magnifying} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path
                              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </span>
                {isClicked && <Map/>}
                {dateIsCLicked && <Calender date={date} setDate={setDate}/>}
                {addGuest &&  <AddGuest number={number} setNumber={setNumber}/>}

            </ul>
        </div>
    )
}

export default ExperiencesInformation;