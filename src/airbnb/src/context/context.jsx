import {createContext, useState, useContext, useEffect} from "react";

const eventsContext = createContext();

const URL = "http://localhost:3000";

function ContextProvider({children}) {

    const [events, setEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [information, setInformation] = useState([]);
    const [content, setContent] = useState('Search destination');
    const [isClicked, setIsClicked] = useState(false);
    const [icons, setIcons] = useState([]);
    const [dateIsCLicked,setDateIsCLicked] = useState(false);

    useEffect(() => {
        async function fetchAllData() {
            try {
                const [eventsRes, pastEventsRes, infoRes, iconRes] = await Promise.all([
                    fetch(`${URL}/events`),
                    fetch(`${URL}/pastEvents`),
                    fetch(`${URL}/information`),
                    fetch(`${URL}/icon`),
                ]);

                const eventsData = await eventsRes.json();
                const pastEventsData = await pastEventsRes.json();
                const infoData = await infoRes.json();
                const iconData = await iconRes.json()

                setEvents(eventsData);
                setPastEvents(pastEventsData);
                setInformation(infoData);
                setIcons(iconData)
            } catch (error) {
                console.log(error);
                alert('Could not read data');
            }
        }

        fetchAllData();
    }, []);


    return <eventsContext.Provider value={
        {
            events,
            pastEvents,
            information,
            isClicked,
            setIsClicked,
            content,
            setContent,
            icons,
            dateIsCLicked,
            setDateIsCLicked
        }}>
        {children}
    </eventsContext.Provider>
}

function useEvents() {
    const context = useContext(eventsContext)
    if (context === undefined) throw Error('eventsContext was used outside the eventsProvider ')
    return context;
}

export {ContextProvider, useEvents};