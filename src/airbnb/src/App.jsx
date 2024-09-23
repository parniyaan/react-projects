import './App.css'
import {ContextProvider} from './context/context';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import MainContainer from "./Main-container/Main-container.jsx";
import Events from "./Main-container/Events/Events.jsx";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<MainContainer/>}>
                        <Route path="data/:name" element={<Events/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </ContextProvider>
    );
}

export default App
