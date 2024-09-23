import {useState, useEffect} from "react";
import styles from "./calender.module.scss";
import {useEvents} from "../../../context/context.jsx";

function Calendar({ setDate }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [month, setMonth] = useState('');
    // const [numberOfDays, setNumberOfDays] = useState(0);
    const [days, setDays] = useState([]);
    const [year, setYear] = useState(0);
    const{setDateIsCLicked} = useEvents()

    function howManyDays(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    useEffect(() => {
        const currentDate = new Date();
        setCurrentDate(currentDate);
    }, []);

    useEffect(() => {
        if (currentDate) {
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            setMonth(currentDate.toLocaleString('default', { month: 'long' }));
            const totalDays = howManyDays(currentYear, currentMonth);


            const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();


            const daysArray = Array.from({ length: firstDayOfMonth }, () => null)
                .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

            setDays(daysArray);
            setYear(currentYear);
        }
    }, [currentDate]);

    function saveDate(event) {
        const target = event.target.textContent;
        if (target) {
            const chosenDay = `${target} ${month} ${year}`;
            setDate(chosenDay);
        }
        setDateIsCLicked(false)
    }

    return (
        <div className={styles.calender}>
            <h1>{month} {year}</h1>
            <div className={styles.days}>
                <span className={styles.day}>Sun</span>
                <span className={styles.day}>Mon</span>
                <span className={styles.day}>Tue</span>
                <span className={styles.day}>Wed</span>
                <span className={styles.day}>Thu</span>
                <span className={styles.day}>Fri</span>
                <span className={styles.day}>Sat</span>
            </div>
            <div className={styles.numbers}>
                {days.map((day, index) => (
                    <span
                        className={day ? styles.number : styles.empty}
                        key={index}
                        onClick={day ? saveDate : null} // Only clickable if it's a valid day
                    >
                        {day || ''}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
