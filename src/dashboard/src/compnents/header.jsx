import React from 'react';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Button from "@mui/material/Button";
import DayNightToggle from "./DayNightToggle.jsx";
import image from '.././images/portrait-homme-riant_23-2148859448.avif'

function Header() {
    return (
        <div className="bg-[#141318] mb-[10px] h-[10%] flex rounded-[20px] items-center px-4 ">
            <div className="flex items-center grow-1">
                <Button
                    sx={{
                        color: "white",
                        backgroundColor: "#EB6B44",
                        width: '30px',
                        height: '30px',
                        borderRadius: '5px',
                        fontSize: "20px",
                        minWidth: 'unset',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: "default"
                    }}
                >
                    X
                </Button>
                <h1 className="text-[24px] text-white font-[600] ml-[5px]">Trade</h1>
            </div>
            <TextField
                placeholder="Search"
                sx={{
                    width: "70%",
                    marginLeft:"100px",
                    height: "40px",
                    '& .MuiOutlinedInput-root': {
                        borderRadius: "30px",
                        height: "100%",
                        '& fieldset': {
                            backgroundColor: "#0E0D12",
                        },
                        '&:hover fieldset': {
                            borderColor: '#0E0D12',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#0E0D12',
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: '#93949A',
                        height: '100%',
                        position: "relative",
                        zIndex: 2,
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#93949A',
                        opacity: 1,
                        position: "relative",
                        zIndex: 2
                    },
                }}
            />
            <span className=" flex w-[40px] h-[40px] rounded-[50%] bg-[#0E0D12] items-center justify-center ml-[10px]">
                <Badge variant="dot" sx={{
                    '.MuiBadge-dot': {
                        backgroundColor: '#EB6B44',

                    },
                }}
                >
                    <NotificationsNoneIcon sx={{color: "#93949A"}}/>
                </Badge>
            </span>
            <DayNightToggle/>
            <div className="flex items-center justify-center bg-[#0E0D12] py-[5px] px-[10px] w-[180px] rounded-[30px]">
                <img src={image} alt="prof" className="w-[45px] h-[45px] rounded-[50%] mr-[5px]"/>
                <div className="flex flex-col text-white">
                    <h3 className="font-bold text-[15px]">Ethan Maxwell</h3>
                    <div className="flex items-center">
                        <h6 className="mr-[20px] text-[12px]">verified</h6>
                        <Badge
                            badgeContent={"✔"}
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: '#4caf50',
                                    color: 'white',
                                    width:"15px",
                                    height:"15px",
                                    minWidth:"unset"
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
