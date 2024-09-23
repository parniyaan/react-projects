import styles from "./TopFooterMain.module.scss";

function TopFooterMain({data}) {
    return (
        <ul className={styles.main}>
            {data?.items?.map((item) => {
                return  (
                    <li key={item.span1} className={styles.items}>
                        <h5 className={styles.span1}>{item.span1}</h5>
                        <span className={styles.span2}>{item.span2}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default TopFooterMain;
