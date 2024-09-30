import './App.css'
import Sidebar from "./componets/sidebar/sidebar.jsx";
import Header from "./componets/header/header.jsx";
import MainContainer from "./componets/mainContainer/mainContainer.jsx";
import Statistics from "./componets/statistics/statistics.jsx";
import Charts from "./componets/chart/chart";


function App() {

    return (
        <div className="App">
            <Sidebar/>
            <div className="header-and-table">
                <Header/>
                <MainContainer/>
                <div className="statistics">
                    <Statistics/>
                    <Charts/>
                </div>
            </div>
        </div>
    )
}

export default App
