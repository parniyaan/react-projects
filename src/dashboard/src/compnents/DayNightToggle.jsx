import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function DayNightToggle() {
    const [isDay, setIsDay] = useState('true');

    function handleModeChange() {
        setIsDay(!isDay)
    }

    return (
        <ToggleButtonGroup
            value={isDay}
            exclusive
            onChange={handleModeChange}
            aria-label="day-night isDay toggle"
            sx={{backgroundColor: "#0E0D12", borderRadius: "30px", padding: "5px", margin: "0 10px"}}
        >
            <ToggleButton
                value="day"
                aria-label="day isDay"
                sx={{
                    width: '45px',
                    border: "none",
                    borderRadius: "50%",
                    backgroundColor: isDay === true ? '#1B1A1F': 'transparent',
                    color: isDay === true ? "#fff" : '#93949A',
                }}
            >
                <WbSunnyIcon sx={{marginRight: '8px'}}/>
            </ToggleButton>

            <ToggleButton
                value="night"
                aria-label="night isDay"
                sx={{
                    width: '45px',
                    border: "none",
                    borderRadius: "50%",
                    backgroundColor: isDay === false ? '#1B1A1F': 'transparent',
                    color: isDay === false ? "#fff" : '#93949A',
                }}
            >
                <DarkModeIcon sx={{marginRight: '8px'}}/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default DayNightToggle;
