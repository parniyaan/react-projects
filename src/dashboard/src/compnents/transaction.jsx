import React from 'react';

const HalfDoughnutChart = () => {

    return (
        <div className=" flex-col items-center justify-center w-[33%] h-[65%] bg-[#141318] p-[20px] rounded-[20px] mx-[10px]">
            <h1 className="text-white text-[26px] font-[500] mb-[40px]">Markets Overview</h1>
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" strokeWidth="35"
                 fill="none" className="mx-auto relative"
            >
                <circle cx="50%" cy="50%" r="120px" stroke="#25203E" strokeLinecap="round"/>
                <circle cx="50%" cy="50%" r="120px" stroke="#7E67f6" strokeDasharray="300,300" strokeLinecap="round"/>
            </svg>
            <div className="flex items-center mt-[20px] ml  ">
                <div className="flex items-center mr-[40px]">
                    <span className="block w-[15px] h-[15px]  rounded-full bg-[#25203E]"></span>
                    <h3 className="text-white text-[20px] font-bold mx-[10px]">52</h3>
                    <h6 className="text-[#93949A]">Active</h6>
                </div>
                <div className="flex items-center">
                    <span className="block w-[15px] h-[15px]  rounded-full bg-[#7E67f6]"></span>
                    <h3 className="text-white text-[20px] font-bold mx-[10px]">14</h3>
                    <h6 className="text-[#93949A]">Expected</h6>
                </div>
                <div className="flex-col w-[130px] items-center text-center absolute right-[39%] top-[34%]">
                    <h1 className="text-white text-[40px]">62%</h1>
                    <h5 className="text-center text-[#93949A]">Percentage of completion</h5>
                </div>
            </div>
        </div>
    );
};

export default HalfDoughnutChart;

// #7E67f6