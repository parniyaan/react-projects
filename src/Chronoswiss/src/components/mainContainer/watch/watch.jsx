import { useState, useEffect } from 'react';
import styles from './watch.module.scss';
import { useWatches } from "../../../context/context.jsx";

function Watch() {
    const { watches, selectedWatch, setSelectedWatch } = useWatches();
    const [currentWatchIndex, setCurrentWatchIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Automatically cycle through watches only if no watch is selected
    useEffect(() => {
        if (watches.length > 0 && !selectedWatch) {
            const intervalId = setInterval(() => {
                setIsFading(true);
                setTimeout(() => {
                    setCurrentWatchIndex((prevIndex) => (prevIndex + 1) % watches.length);
                    setIsFading(false);
                }, 1000);
            }, 4000);

            return () => clearInterval(intervalId);
        }
    }, [watches.length, selectedWatch]);

    const watch = selectedWatch ? selectedWatch : watches[currentWatchIndex];

    const handleWatchClick = (watch) => {
        console.log('Selected watch:', watch); // Ensure you're logging the actual watch object
        setSelectedWatch(watch); // Set the selected watch
    };

    if (watches.length === 0) {
        return <div>No watches available.</div>;
    }

    return (
        <li className={styles.watch}>
            <div className={styles.info}>
                <h5 className={styles.model}>{watch.model}</h5>
                <h1 className={styles.name}>{watch.name}</h1>
                <h4 className={styles.price}>{watch.price}</h4>
                <button
                    className={styles.buyButton}
                    onClick={() => handleWatchClick(watch)}>
                    Select Watch
                </button>
            </div>
            <div className={styles.picture}>
                <img
                    className={`${styles.image} ${isFading ? styles['fade-out'] : ''}`}
                    src={watch.img}
                    alt={watch.name}
                    onClick={() => handleWatchClick(watch)} // Example of setting the watch on image click
                />
            </div>
            <div className={styles.options}>
                <h4 className={styles.isAvailable}>AVAILABLE</h4>
                <div className={styles.icons}>
                    {/* Your icons */}
                </div>
            </div>
        </li>
    );
}

export default Watch;
