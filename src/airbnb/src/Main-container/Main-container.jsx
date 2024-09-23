import Slider from "./Slider/Slider.jsx";
import Events from "./Events/Events.jsx";
import styles from "./Main-container.module.scss";
import PastEvents from "./Past-events/Past-events.jsx";
import {useEvents} from "../context/context.jsx";

function MainContainer () {

    const {events,pastEvents} = useEvents()

    if (!events) {
        return <div>Loading...</div>;
    }

    return(
        <div className={styles.mainpart}>
            <Slider />
            <Events events={events} pastEvents={pastEvents} />
            <PastEvents pastEvents={pastEvents}/>
        </div>
    )
}

export default MainContainer;