import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import styles from "./statistics.module.scss";

function Statistics() {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];



    useEffect(() => {
        Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend);

        const ctx = document.getElementById('statistics').getContext('2d');

        // ctx.width = 400;
        // ctx.height = 200;


        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Research",
                    data: [24, 58, 46, 84, 67, 21, 57],
                    fill: false,
                    borderColor: '#01ADDD',
                    tension: 0.5,
                },
                {
                    label: "Design",
                    data: [82, 27, 67, 36, 24, 75, 97],
                    fill: false,
                    borderColor: '#4A1476',
                    tension: 0.5
                }
            ]
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        });


        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className={styles.chart}>
            <canvas id="statistics" width="700" height="200"></canvas>
        </div>
    );
}

export default Statistics;
