import { Button } from "antd";
import "./mainContainerTop.css";

function MainContainerTop () {
    return(
        <div className="d-flex justify-content-center w-100">
            <div className="d-flex flex-column bg-custom1 h-50 p-custom ">
                <h3 className="fw-bolder">Create and sell extraordinary products</h3>
                <p className="fontSize-custom">The world's first and largest handmade products marketplace</p>
                <div className="">
                    <Button type="default" className="text-[#54AE32] w-25 mr-custom fw-bolder">Top Sellers</Button>
                    <Button type="primary" className="bg-inherit border-white w-25">Explore</Button>
                </div>
            </div>
            <div className="d-flex flex-column bg-custom2 p-25">
                <h3>My Stats</h3>
                <div className="d-flex">
                    <div className="d-flex d-flex flex-column me-4">
                        <span>Today</span>
                        <h6>4 orders</h6>
                    </div>
                    <div className="d-flex d-flex flex-column">
                        <span>This Month</span>
                        <h6>173 orders</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainerTop;