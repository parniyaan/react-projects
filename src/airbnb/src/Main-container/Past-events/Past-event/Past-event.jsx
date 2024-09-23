import styles from "../../Events/Event/Event.module.scss";

function PastEvent({pastEvent}) {
    return (
        <li className={styles.options}>
            <img src={pastEvent.imageUrl} alt={pastEvent.name}/>
            <h4>{pastEvent.name}</h4>
            <p>{pastEvent.hostedBy}</p>
            <h5>Sold Out</h5>
            <span className={styles.upload}>
                <svg className={styles.uploadicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M264 27.3V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3L133.7 141.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0l128 128c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L264 27.3zM216 336H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H448c26.5 0 48-21.5 48-48V384c0-26.5-21.5-48-48-48H296V320H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V384c0-35.3 28.7-64 64-64H216v16zm216 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/>
                 </svg>
            </span>
        </li>
    )
}

export default PastEvent;