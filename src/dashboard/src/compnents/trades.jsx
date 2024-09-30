import React, {useState} from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";

function Trades() {
    const [buyOrSell, setByeOrSell] = useState("Sell");

    function buttonHandler(e) {
        setByeOrSell(e.target.textContent)
        console.log(buyOrSell)
    }

    return (
        <div
            className=" flex-col items-center justify-center w-[33%] bg-[#141318] p-[20px] rounded-[20px] ">
            <h1 className="text-white text-[26px] font-[500] mb-[50px]">Make quick trades</h1>
            <div className="mb-[20px] text-center">
                <ToggleButtonGroup
                    exclusive
                    aria-label="day-night mode toggle"
                    sx={{backgroundColor: "#0E0D12", borderRadius: "30px",textAlign: "center",}}
                >
                    <ToggleButton
                        onClick={buttonHandler}
                        value="day"
                        aria-label="day mode"
                        sx={{
                            width: '120px',
                            border: "none",
                            borderRadius: "30px",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: buyOrSell === 'Buy' ? '#1B1A1F' : 'transparent'
                        }}
                    >
                        Buy
                    </ToggleButton>

                    <ToggleButton
                        onClick={buttonHandler}
                        value="night"
                        aria-label="night mode"
                        sx={{
                            width: '120px',
                            border: "none",
                            borderRadius: "30px",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: buyOrSell === 'Sell' ? '#1B1A1F' : 'transparent'
                        }}
                    >
                        Sell
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="flex flex-col justify-center bg-[#1B1A1F] mb-[30px] p-[10px] rounded-[20px]">
                <h4 className="text-white font-bold mb-[5px]">Spend</h4>
                <div className="flex justify-between text-[#93949A] ">
                    <h2 className="">15-12.500</h2>
                    <span className="flex ">
                        <img className="w-[20px] h-[20px] mr-[5px] rounded-full"
                             src="https://www.svgrepo.com/show/367256/usdt.svg" alt="USDT"/>
                        <h4>USDT</h4>
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-[#1B1A1F] p-[10px] mb-[30px] rounded-[20px]">
                <h4 className="text-white font-bold mb-[5px]">Recieve</h4>
                <div className="flex justify-between text-[#93949A] ">
                    <h2 className="">0</h2>
                    <span className="flex items-center">
                        <img className="w-[20px] h-[20px] mr-[5px] rounded-full"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIqMECbC__p8ZI9HEPjNxsS2Y0jjznPYRcRwXs95UetiYCSYQIP1N04iUzHL9Nyf156Y&usqp=CAU"
                             alt="USDT"/>
                        <h4>EUR</h4>
                    </span>
                </div>
            </div>
            <Button sx={{
                backgroundColor: '#EB6B44',
                color: "white",
                width: "490px",
                borderRadius: "30px"
            }}>{buyOrSell === "Sell" ? "sell" : "buy"}</Button>

        </div>
    )
}

export default Trades;