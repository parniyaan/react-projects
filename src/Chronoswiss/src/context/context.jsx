import {useContext, createContext, useState, useEffect} from 'react';

const watchesContext = createContext();

const URL = "http://localhost:3000"

function ContextProvider({children}) {
    const [watches, setWatches] = useState([])
    const [selectedWatch, setSelectedWatch] = useState('');

    useEffect(() => {

        async function fetchingData() {
            try {
                const res = await fetch(`${URL}/data`)
                const data = await res.json()
                setWatches(data)
                console.log(data)
            } catch
                (error) {
                console.log(error)
            }
        }

        fetchingData()
    }, []);


    return <watchesContext.Provider value={{
        watches,
        selectedWatch,
        setSelectedWatch
    }}>{children}
    </watchesContext.Provider>
}

function useWatches() {
    const context = useContext(watchesContext)
    if (context === undefined) throw Error('watchesContext was used outside the watchesProvider ')
    return context
}

export {ContextProvider, useWatches};