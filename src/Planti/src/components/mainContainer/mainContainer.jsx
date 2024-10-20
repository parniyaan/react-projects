import MainContainerTop from "./mainContainerTop/mainContainerTop.jsx";
import MainContainerBottom from "./mainContainerBottom /mainContainerBottom.jsx";

function mainContainer () {
    return(
        <div className="w-100">
            <MainContainerTop className="w-100"/>
            <MainContainerBottom className="w-100"/>
        </div>
    )
}
export default mainContainer;