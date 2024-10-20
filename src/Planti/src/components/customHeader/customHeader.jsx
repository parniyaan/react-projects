import {Input} from 'antd';
import {SearchOutlined, MessageOutlined, BellOutlined} from '@ant-design/icons';
import {Avatar} from "antd";
import image from "../../images/portrait-homme-riant_23-2148859448.avif"
import "./customHeader.css"


function CustomHeader() {
    return (
        <div className="d-flex align-items-center justify-content-between w-100 bg-light">
            <div>
                <h3 className="fw-bolder">Welcome to Planti.</h3>
                <h6 className="text-secondary">Hello John,welcome back!</h6>
            </div>
            <div className="d-flex align-items-center">
                <Input
                    placeholder="Search Dashboard"
                    prefix={<SearchOutlined/>}
                    style={{width: 300}}
                />
                <span className="shadow-sm w-5 ms-5 d-flex align-item-center justify-content-center">
                <MessageOutlined style={{fontSize: "20px"}}/>
                </span>
                <span className="shadow-sm w-5 d-flex align-item-center justify-content-center">
                <BellOutlined style={{fontSize: "20px"}}/>
                </span>
                <Avatar src={image} size={42} shape="square"/>
            </div>
        </div>
    )
}

export default CustomHeader;