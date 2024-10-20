import {Avatar} from 'antd';
import "./seller.css"

function sellers() {
    return (
        <div className="d-flex mt-4 ">
            <div className="sellers w-50 me-4">
                <h5 className="title-style">
                    Top Sellers
                </h5>
                <div className="border shadow d-flex align-items-center  p-3 rounded mt-4">
                    <div className="mx-5">
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/women/22.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/men/33.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/men/55.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/women/44.jpg"/>
                    </div>
                    <div className="custom-borderLeft p-2">
                        <h6>1,542 plants sold</h6>
                        <div className="d-flex align-items-center">
                            <h6 className="me-5 text-secondary font-size me-4">10 sellers</h6>
                            <h6 className="ms-5 text-secondary font-size2">7 days</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sellers w-50">
                <h5 className="title-style">
                    Featured Sellers
                </h5>
                <div className="border shadow d-flex align-items-center p-3 mt-4 rounded">
                    <div className="mx-5">
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/women/66.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/men/99.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/women/88.jpg"/>
                        <Avatar className="custom-margin" src="https://randomuser.me/api/portraits/women/77.jpg"/>
                    </div>
                    <div className="custom-borderLeft p-2">
                        <h6>2,575 plants sold</h6>
                        <div className="d-flex align-items-center">
                            <h6 className="me-5 font-size text-secondary me-4">10 sellers</h6>
                            <h6 className="ms-5 text-secondary font-size2 ">7 days</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sellers;