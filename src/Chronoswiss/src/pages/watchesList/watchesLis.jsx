import { useWatches } from "../../context/context.jsx";
import styles from "./watchesList.module.scss";
import { NavLink } from "react-router-dom";

function WatchesLis() {
    const { watches } = useWatches();
    const { setSelectedWatch } = useWatches();

    function watchClickHandler(item) {
        setSelectedWatch(item);
    }

    return (
        <div className={styles.watchesList}>
            <h2 className={styles.title}>NOVELTIES</h2>
            <ul className={styles.watchesContainer}>
                {watches.map((watch, index) => (
                    <NavLink
                        to="/"
                        key={index}
                        className={styles.listItem}
                        onClick={() => watchClickHandler(watch)}
                    >
                        <img className={styles.watchImage} src={watch.img} alt={watch.name} />
                        <div className={styles.information}>
                            <h4 className={styles.watchName}>{watch.name}</h4>
                            <h4 className={styles.watchModel}>{watch.model}</h4>
                        </div>
                        <span className={styles.detail1}>NEW</span>
                        <span className={styles.detail2}>LIMITED</span>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}

export default WatchesLis;
