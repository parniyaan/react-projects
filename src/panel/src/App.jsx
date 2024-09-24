import './App.css'
import Sidebar from "./componets/sidebar/sidebar.jsx";
import Header from "./componets/header/header.jsx";
import MainContainer from "./componets/mainContainer/mainContainer.jsx";
import Statistics from "./componets/statistics/statistics.jsx";


function App() {

    return (
        <div className="App">
            <Sidebar/>
            <div className="header-and-table">
                <Header/>
                <MainContainer/>
                <Statistics/>
            </div>
        </div>
    )
}

export default App
