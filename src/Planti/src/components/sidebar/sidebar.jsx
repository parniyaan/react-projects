import image from "../../images/images (10).jpeg";
import {
    DashboardOutlined, CarOutlined, CompassOutlined,
    GiftOutlined,
    SettingOutlined,
    PieChartOutlined,
    LineChartOutlined,
    ContactsOutlined,
    MoneyCollectOutlined,
    UserOutlined
} from "@ant-design/icons";
import './sidebar.css';

function Sidebar() {
    return (
        <div className="p-1 w-20">
            <div className="d-flex align-items-center m-4 mb-4">
                <img
                    src={image}
                    alt="logo"
                    className='custom-style rounded-circle'
                />
                <h3 className="custom-text-color fw-bolder">Planti.</h3>
            </div>

            <ul className="list-unstyled mb-4">
                <li className="d-flex py-3 mb-1 text-secondary sidebar-item align-items-center">
                    <DashboardOutlined />
                    <h6 className="mb-0 ms-5">Dashboard</h6>
                </li>
                <li className="d-flex py-3 mb-1 text-secondary sidebar-item align-items-center">
                    <CarOutlined />
                    <h6 className="mb-0 ms-5">Wy Orders</h6>
                </li>
                <li className="d-flex py-3 mb-1 text-secondary sidebar-item align-items-center">
                    <CompassOutlined />
                    <h6 className="mb-0 ms-5">Explore</h6>
                </li>
                <li className="d-flex py-3 mb-1 text-secondary sidebar-item align-items-center">
                    <GiftOutlined />
                    <h6 className="mb-0 ms-5">Feature Products</h6>
                </li>
            </ul>

            <h6 className="mb-4 ms-5 fs-2">SETTING</h6>
            <ul className="list-unstyled">
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <SettingOutlined />
                    <h6 className="mb-0 ms-5">Setting</h6>
                </li>
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <PieChartOutlined />
                    <h6 className="mb-0 ms-5">Charts</h6>
                </li>
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <LineChartOutlined />
                    <h6 className="mb-0 ms-5">Trends</h6>
                </li>
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <ContactsOutlined />
                    <h6 className="mb-0 ms-5">Contact</h6>
                </li>
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <MoneyCollectOutlined />
                    <h6 className="mb-0 ms-5">Billing</h6>
                </li>
                <li className="d-flex mb-1 py-2 text-secondary sidebar-item align-items-center">
                    <UserOutlined />
                    <h6 className="mb-0 ms-5">Setting</h6>
                </li>
            </ul>

            <div className="help-center d-flex flex-column align-items-center justify-content-around rounded mt-1 m-auto">
                <h4 className="custom-title">Help Center</h4>
                <p className="custom-paragraph text-center">Having trouble in Planti. Please contact us for more questions.</p>
                <button type="button" className="btn btn-light">Go To Help Center</button>
            </div>
        </div>
    );
}

export default Sidebar;
