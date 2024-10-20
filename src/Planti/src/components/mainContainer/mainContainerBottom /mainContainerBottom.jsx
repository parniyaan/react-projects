import History from "./history/history.jsx";
import Listings from "./listings/listings.jsx";

function MainContainerBottom() {
    return(
        <div className="d-flex">
            <Listings/>
            <History/>
        </div>
    )
}
export default MainContainerBottom;