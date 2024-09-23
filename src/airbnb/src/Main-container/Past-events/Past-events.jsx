import styles from '../Events/Events.module.scss';
import PastEvent from "./Past-event/Past-event.jsx";
import style from './Past-events.module.scss';
import {useEvents} from "../../context/context.jsx";

function PastEvents () {
  const {pastEvents} = useEvents()


    return(
        <div className={style.pastevents}>
            <h1>Past Experiences</h1>
            <ul className={styles.eventlist}>
                {pastEvents.map((pastEvent, index) => (
                    <PastEvent key={index} pastEvent={pastEvent}/>
                ))}
            </ul>
        </div>
    )
}

export default PastEvents;