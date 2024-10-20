import './App.css';
import Sidebar from "./components/sidebar/sidebar.jsx";
import CustomHeader from "./components/customHeader/customHeader"; // Renaming custom Header
import {Layout} from 'antd';
import MainContainer from "./components/mainContainer/mainContainer.jsx";

const {Sider, Header: AntHeader, Content} = Layout; // Renaming antd Header

function App() {
    return (
        <Layout className="w-100 app">
            <Sider width={250} style={{background: '#fff'}} className="custom-width-header">
                <Sidebar/>
            </Sider>
            <div className="custom-width-main">
                <AntHeader className="d-flex align-items-center bg-light min-w-0"
                           style={{ height: "100px"}}>
                    <CustomHeader/>
                </AntHeader>
                <Content className="h-50">
                    <MainContainer/>
                </Content>
            </div>
        </Layout>
    );
}

export default App;
