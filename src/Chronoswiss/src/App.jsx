import './App.css'
import Header from "./components/header/header.jsx";
import {ContextProvider} from "./context/context.jsx";
import MainContainer from "./components/mainContainer/mainContainer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WatchesLis from "./pages/watchesList/watchesLis.jsx";
import ExtendWarranty from "./pages/ExtendWarranty/extendWarranty.jsx";
import Service from "./pages/service/service.jsx";
import MaintenancePage from "./pages/maintenance/maintenance.jsx";
import Footer from "./components/footer/footer.jsx";
import Blog from "./pages/blog/blog.jsx";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="*" element={<MainContainer/>}/>
                    <Route path="/watches" element={<WatchesLis/>}/>
                    <Route path="/Extend-warranty" element={<ExtendWarranty/>}/>
                    <Route path="/Service" element={<Service/>}/>
                    <Route path="/Maintenance" element={<MaintenancePage/>}/>
                    <Route path="/BLog" element={<Blog/>}/>
                </Routes>
                <Footer/>
            </Router>
        </ContextProvider>
    )
}

export default App;
