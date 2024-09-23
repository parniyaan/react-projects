import styles from "./AddGuest.module.scss";

function AddGuest({number,setNumber}) {


    return (
        <div className={styles.guests}>
            <h4 className={styles.title}>Add Guests</h4>
            <div className={styles.calculate}>
                <span className={styles.symbol} onClick={() => setNumber(i => i - 1)}> - </span>
                <span className={styles.number}>{number}</span>
                <span className={styles.symbol} onClick={() => setNumber(i => i + 1)}> + </span>
            </div>
        </div>
    )
}

export default AddGuest;