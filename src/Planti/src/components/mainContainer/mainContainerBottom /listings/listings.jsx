import plant1 from "../../../../images/3592__57802.1666163599.386.513__25889.jpg";
import plant2 from "../../../../images/3608__62551.1666163599.386.513__47602.jpg";
import plant3 from "../../../../images/4622__12977.1666163598.386.513__03636.jpg";
import "./listings.css";
import Sellers from "../sellers/sellers.jsx";


function Listings() {
    return (
        <div className="mx-5 px-4 pt-4" >
            <h3 className="title-style mb-4">My Listings</h3>
            <div>
                <ul className="listings list-unstyled d-flex">
                    <li className="shadow custom-height rounded-3  list-item w-33">
                        <img src={plant1} alt="plants" className="image-size"/>
                        <h6 className="text-center">Anna aglaonema</h6>
                    </li>
                    <li className="shadow custom-height rounded-3 list-item w-33">
                        <img src={plant2} alt="plants" className="image-size"/>
                        <h6 className="text-center">Annual Vinca</h6>
                    </li>
                    <li className="shadow custom-height rounded-3 list-item w-33">
                        <img src={plant3} alt="plants" className="image-size"/>
                        <h6 className="text-center">Spineless yucca</h6>
                    </li>
                </ul>
            </div>
            <Sellers/>
        </div>
    )
}

export default Listings