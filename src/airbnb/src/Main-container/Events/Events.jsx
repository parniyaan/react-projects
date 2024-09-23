import Event from "./Event/Event.jsx";
import styles from "./Events.module.scss";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

function Events() {
    const [roomsData, setRoomsData] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const url = name ? `http://localhost:3000/data/${name}` : 'http://localhost:3000/data/icons';
                const response = await fetch(url);
                const data = await response.json();
                setRoomsData(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [name]);

    return (
        <ul className={styles.eventlist}>
            {roomsData.map((event, index) => (
                <Event key={index} event={event}/>
            ))}
        </ul>
    );
}

export default Events;
