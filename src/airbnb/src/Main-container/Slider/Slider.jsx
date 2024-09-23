    import styles from './Slider.module.scss';
    import {useRef} from "react";
    import {useEvents} from "../../context/context.jsx";
    import {useNavigate} from "react-router-dom";


    function Slider() {

        const {icons} = useEvents()
        const sliderRef = useRef(null);
        const navigate = useNavigate();

        const scrollRight = () => {
            if (sliderRef.current) {
                sliderRef.current.scrollBy({left: 200, behavior: 'smooth'});
            }
        };

        const scrollLeft = () => {
            if (sliderRef.current) {
                sliderRef.current.scrollBy({left: -200, behavior: 'smooth'});
            }
        };


        const handleIconClick = (iconName) => {
            navigate(`/data/${iconName}`);
            console.log(iconName)
        };

        return (
            <div className={styles.sliderContainer}>
                  <span onClick={scrollLeft} className={styles.scrollleft}>
                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path
                    d="M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"/></svg>
                </span>
                <ul className={styles.slider} ref={sliderRef}>
                    {icons.map((icon,index) => (
                        <li key={index} onClick={() => handleIconClick(icon.name)}>
                            <img src={icon.imageSrc} alt={icon.name}/>
                            <h4>{icon.name}</h4>
                        </li>
                    ))}
                </ul>
                <span onClick={scrollRight} className={styles.scrollright}>
                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path
                    d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"/></svg>
                </span>
            </div>
        )
    }

    export default Slider;