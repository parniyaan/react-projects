import Logo from "./Logo/Logo.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import User from "./User/User.jsx";
import styles from "./Header.module.scss";
import StaysInformation  from "./Informations/staysInformation/StaysInformation.jsx";
import {useState} from "react";
import ExperiencesInformation from "./Informations/ExperincesInformation/ExperinecesInformation.jsx";

function Header() {
    const [stayIsClicked, setStayIsCLicked] = useState(true);
    const [experiencesIsClicked, setExperiencesIsCLicked] = useState(false);
    const [date, setDate] = useState("Any time");
    const [addGuest,setAddGuest] = useState(false);
    const [number, setNumber] = useState(0);


    return (
        <div className={styles.header}>
            <div className={styles.topHeader}>
                <Logo/>
                <Navbar
                    setExperiencesIsCLicked={setExperiencesIsCLicked}
                    setStayIsCLicked={setStayIsCLicked}
                    stayIsClicked={stayIsClicked}
                    experiencesIsClicked={experiencesIsClicked}
                    setDate={setDate}
                    setAddGuest={setAddGuest}
                    setNumber={setNumber}
                />
                <User/>
            </div>
            <div>
                {stayIsClicked && <StaysInformation date={date} setDate={setDate} addGuest={addGuest} setAddGuest={setAddGuest}  number={number} setNumber={setNumber}/>}
                {experiencesIsClicked && <ExperiencesInformation date={date} setDate={setDate} addGuest={addGuest} setAddGuest={setAddGuest} number={number} setNumber={setNumber}/>}
            </div>
        </div>
    );
}

export default Header;
