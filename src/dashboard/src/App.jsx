import './App.css'
import Sidebar from "./compnents/sidebar.jsx";
import Header from "./compnents/header.jsx";
import MarketOverview from "./compnents/marketOverview.jsx";
import Transaction from "./compnents/transaction.jsx";
import Trades from "./compnents/trades.jsx";
import BarChart from "./compnents/chart.jsx";

function App() {

    return (
        <div className="h-screen w-full flex-col">
            <Header/>
            <div className="flex w-full ">
                <Sidebar/>
                <div className="flex-col ml-[10px] w-[84%]">
                    <div className="flex w-full">
                        <MarketOverview/>
                        <Transaction/>
                        <Trades/>
                    </div>
                    <BarChart/>
                </div>
            </div>
        </div>
    )
}

export default App
