import styles from './TopFooter.module.scss';
import TopFooterNavbar from "./TopFooterNavbar/TopFooterNavbar.jsx";
import TopFooterMain from "./TopFooterMain/TopFooterMain.jsx";
import {useEvents} from "../../context/context.jsx";
import {useState} from "react";

function TopFooter() {
    const {information} = useEvents()
    const [selectedItem, setSelectedItem] = useState(null);

    const selected = selectedItem || information?.[0]

    return (
        <div className={styles.topFooter}>
            <TopFooterNavbar data={information} selected={selected} onSelect={(item) => setSelectedItem(item)}/>
            <TopFooterMain data={selected}/>
        </div>
    )
}

export default TopFooter;
