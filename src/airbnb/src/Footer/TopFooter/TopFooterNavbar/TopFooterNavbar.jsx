import styles from "./TopFooterNavbar.module.scss";

function TopFooterNavbar ({data, selected, onSelect}) {
    return (
        <ul className={styles.options}>
            {data?.map((item) => (
                <li key={item.id} onClick={() => onSelect(item)} className={item.id === selected.id ? styles.selected : ''}>{item.title}</li>
            ))}
        </ul>
    )
}

export default TopFooterNavbar;