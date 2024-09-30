import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
    const data = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'Sales ($)',
                data: [10, 15, 8, 20, 12, 8, 6, 18, 14, 7],
                backgroundColor: '#7E67f6',
                borderWidth: 1,
                borderRadius: 20,
                barThickness: 135,
            },

        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    display: false,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };

    return (
        <div className="w-[100%]  bg-[#141318] rounded-[20px] mt-[10px] p-[20px]">
            <div className="flex items-center  justify-between">
                <h1 className="text-white text-[26px] font-[500] mb-[25px]">Sales hart</h1>
                <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png" alt="currency"
                         className="w-[35px] h-[35px] rounded-full mr-[10px]"/>
                    <h3 className="text-[#93949A] mr-[30px]">BTC</h3>
                </div>
            </div>
            <div className="w-[90%] h-[55%] mx-auto">
                <Bar data={data} options={options}/>
            </div>
            <div className="flex items-center mr-[40px] mt-[20px]">
                <span className="block w-[15px] h-[15px]  rounded-full bg-[#7E67f6]"></span>
                <h6 className="text-[#93949A] text-[14px] ml-[5px]">Trading volume</h6>
            </div>
        </div>
    );
}

export default BarChart;
